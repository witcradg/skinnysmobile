
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {
    return (
        <>
            <h2 className="text-center text-3xl">Top Questions from our Customers</h2>
            <Accordion className="text-xl" type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>How long will the repairs take?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        Repairs are done on a first come first serve basis using our online scheduler.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can you provide a cost estimate before starting work?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        We are 100% transparent with our pricing.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I schedule An Appointment?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        We recommend scheduling appointments for all of our services. You can do
                        so at skinnysperformance.com/appointments/
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do You Have any specials?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        We offer a $20 Car Inspection on all repairs. Simply schedule your car inspection here: skinnysperformance.com/appointments/
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Do You Offer Mobile Service?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        Skinnys Performance offers Mobile Repair Service 24/7.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Can I drop my car off or do I have to wait?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                       When scheduling your appointment you will be asked if you would like to wait or
                       drop your car off.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Do you have any discounts?</AccordionTrigger>
                    <AccordionContent className="text-xl" >
                        We offer a $100 service for first time visitors or $20 first time inspection. 
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default Faq;