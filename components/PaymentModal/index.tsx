import { usePaystackPayment } from 'react-paystack';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseUrl } from '@/utils/data/sample';
import { Puff } from "react-loader-spinner";

const ConfirmPaymentModal = ({ open, onClose, selectedPlan, paymentRef }: { open: boolean, onClose: () => void, selectedPlan: any, paymentRef?: string }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [paymentReference] = useState<string>(paymentRef || nanoid());
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
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    const onTransactionClose = () => {
        toast.error("Payment cancelled");
        window.location.reload();
    }

    async function handlePayment() {
        setLoading(true);
        try {
            if (!paymentRef) {
                await axios.post(`${baseUrl}/auth/make-payment`, {
                    amount: user.userRole === "Individual"
                        ? (selectedPlan.title === "Free Plan" ? 0 : 20000 * 100)
                        : (user.userRole === "School" ? 15000 * 100 : 20000 * 100),
                    paymentReference: paymentReference,
                });
            }

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

export default ConfirmPaymentModal;