export default function MakePayment({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div>
            <h1>Make Payment</h1>
            <div>
                <h2>Payment Details</h2>
                <p>Payment ID: {id}</p>
            </div>
        </div>
    )
}