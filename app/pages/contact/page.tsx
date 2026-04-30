import EmailLink from "@/components/EmailLink";
import { FaPhone } from "react-icons/fa";


export default function ContactPage() {
    const message = "Do not hesitate to contact us if you have any questions.";
    const containerStyle = {
        padding: '20px',
        width: '100%',
        height: '400px'
};

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Contact Us</h1>
      <p className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">{message}</p>
    
        <div >
            <main style={{ padding: "2rem" }}>
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Email for questions and quotes</h1>
                <EmailLink email="orocarpentryllc@gmail.com" />
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Call us for a Free Estimate</h1>
                <p><FaPhone /> (919) 730-2729</p>
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Located in</h1>
                <p>Burlington, NC</p>
            </main>
        </div>
    </div>
  );
}
