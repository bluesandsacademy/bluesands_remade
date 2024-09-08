"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid';
import { usePaystackPayment } from 'react-paystack';
import { baseUrl } from "@/utils/data/sample";

const pricingData = [
    {
        title: "Free Plan",
        userType: "Individual",
        description:
            "Outstanding value, because we believe in enhancing science ed everywhere!",
        price: "₦0",
    },
    {
        title: "Termly Plan",
        userType: ["Individual", "School"],
        description:
            "Amazing  for fast 3D virtual labs with all the essential features.",
        price: ["₦20,000", "₦15,000"],
    },
];

const ConfirmPaymentModal = ({ open, onClose, selectedPlan }: { open: boolean, onClose: () => void, selectedPlan: any }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [paymentReference, setPaymentReference] = useState<string>(nanoid());
    const initializePayment = usePaystackPayment({
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
        amount: user.userRole === "Individual"
            ? (selectedPlan.title === "Free Plan" ? 0 : 20000 * 100)
            : (user.userRole === "School" ? 15000 * 100 : 20000 * 100),
        email: user.emailAddress,
        reference: paymentReference,
    });

    const onTransactionSuccess = async () => {
        toast.success("Payment successful");
        onClose();
    }

    const onTransactionClose = () => {
        toast.error("Payment cancelled");
    }

    async function handlePayment() {
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/auth/make-payment`, {
                amount: user.userRole === "Individual"
                    ? (selectedPlan.title === "Free Plan" ? 0 : 20000 * 100)
                    : (user.userRole === "School" ? 15000 * 100 : 20000 * 100),
                paymentReference: paymentReference,
            });

            initializePayment({
                onSuccess: onTransactionSuccess,
                onClose: onTransactionClose,
            });
        } catch (error: any) {
            console.error(error)
            if (error && error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Error making payment")
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-md text-center">
                <h1 className="text-2xl font-bold">Confirm Payment</h1>
                <p className="text-sm text-gray-500">Are you sure you want to make this payment?</p>
                <div className="flex items-center justify-center gap-x-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handlePayment}>{loading ? <Puff color="#fff" height={20} width={20} /> : "Yes"}</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    )
}


const PaymentComponent = ({ next, prev }: { next: () => void, prev: () => void }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const { user } = useAuth();
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [config, setConfig] = useState<any>();

    const { refresh } = useRouter();


    const handleCreatePayment = async (amount: number) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/auth/make-payment`, {
                amount: amount * 100,
                paymentReference: nanoid(),
            });

            toast("Payment successful");
            refresh()
        } catch (error: any) {
            console.error(error)
            if (error && error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Error creating payment")
            }
        } finally {
            setLoading(false);
        }
    }

    const handleFreePayment = () => {
        setLoading(true);
        handleCreatePayment(0);
    }


    return (
        <div className="p-10">
            {modal && <ConfirmPaymentModal open={modal} onClose={() => setModal(false)} selectedPlan={selectedPlan} />}
            <h1 className="text-3xl font-bold mb-6">Choose a Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pricingData.map((plan, index) => {
                    const price = user.userRole === "Individual"
                        ? (plan.title === "Free Plan" ? 0 : 20000)
                        : (user.userRole === "School" ? 15000 : 20000);

                    console.log(`Price for ${user.userRole} is ${price}`)

                    return (
                        <div key={index} className="border rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                            <p className="text-gray-600 mb-4">{plan.description}</p>
                            <p className="text-xl font-bold mb-2">
                                {Array.isArray(plan.price) ? `${plan.price[0]} / ${plan.price[1]}` : plan.price}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                {Array.isArray(plan.userType) ? plan.userType.join(' - ') : plan.userType}
                            </p>
                            <button
                                onClick={() => {
                                    if (plan.title === "Free Plan") {
                                        handleFreePayment()
                                        return;
                                    } else {
                                        setSelectedPlan(plan)
                                        setModal(true)
                                    }
                                }}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                disabled={loading === true}
                            >
                                {loading ? <Puff height={20} width={20} /> : "Select Plan"}
                            </button>
                        </div>
                    )
                })}
            </div>
            <button
                onClick={prev}
                className="mt-6 text-blue-500 hover:text-blue-600 transition mx-auto"
            >
                Back
            </button>
        </div>
    )
}

const PaymentHistoryComponent = ({ next, prev, profile }: { next: () => void, prev: () => void, profile: any }) => {
    const { logout } = useAuth();

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-y-3">
                <h1 className="text-4xl font-bold">User Information</h1>
                <p className="text-2xl">{profile?.fullName}</p>
                <p className="text-xl">{profile?.emailAddress}</p>
                <p className="text-lg border border-gray-300 text-gray-700 p-2 rounded-md cursor-pointer">{profile?.userRole}</p>
                <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={next}>Make Payment</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3 overflow-x-scroll w-full">
                <h2 className="text-2xl font-bold">Payment History</h2>
                {profile?.payments && profile.payments.length > 0 ? (
                    <div className="w-full max-w-2xl">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">Amount</th>
                                    <th className="border border-gray-300 p-2">Method</th>
                                    <th className="border border-gray-300 p-2">Status</th>
                                    <th className="border border-gray-300 p-2">Payment Plan</th>
                                    <th className="border border-gray-300 p-2">Date</th>
                                    <th className="border border-gray-300 p-2">Expiry</th>
                                    <th className="border border-gray-300 p-2">Reference</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {profile.payments.map((payment: any, index: number) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="border border-gray-300 p-2">₦{(payment.amount / 100).toLocaleString()}</td>
                                        <td className="border border-gray-300 p-2">{payment.paymentMethod}</td>
                                        <td className="border border-gray-300 p-2">{payment.paymentStatus}</td>
                                        <td className="border border-gray-300 p-2">{payment.paymentPlan}</td>
                                        <td className="border border-gray-300 p-2">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                                        <td className="border border-gray-300 p-2">{new Date(payment.expiryDate).toLocaleDateString()}</td>
                                        <td className="border border-gray-300 p-2">{payment.paymentReference}</td>
                                        {payment.paymentStatus === "Pending" && (
                                            <td className="border border-gray-300 p-2">
                                                <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">
                                                    Pay
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-xl">No payment history available</p>
                )}
            </div>
            <button
                onClick={logout}
                className="mt-6 text-blue-500 hover:text-blue-600 transition mx-auto"
            >
                Logout
            </button>
        </>
    )
}

export default function Dashboard() {
    const [component, setComponent] = useState<number>(0);
    const { getProfile } = useAuth();
    const [profile, setProfile] = useState<any>(null);

    async function fetchProfile() {
        const profile = await getProfile();
        setProfile(profile);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    const next = () => {
        setComponent(component + 1);
    }

    const prev = () => {
        setComponent(component - 1);
    }

    const components = [
        <PaymentHistoryComponent next={next} prev={prev} profile={profile} key={0} />,
        <PaymentComponent next={next} prev={prev} key={1} />
    ]

    return (
        <div className="flex flex-col items-center justify-start py-10 h-[80vh] gap-y-10">
            {components[component]}
        </div>
    )
}