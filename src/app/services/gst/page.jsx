import React from "react";
import Services from "@/components/Services";

const Data = {
  title: (
    <>
      Our <span className="text-[#4640DE]">GST service offerings</span> and much
      more
    </>
  ),
  description:
    "Streamline your GST compliance with ease! Our intuitive platform simplifies GST registration, filing, and returns. Get accurate calculations, timely reminders, and expert support to avoid penalties. Whether you're a small business or enterprise, trust us for hassle-free GST management. Start today and stay compliant with India's GST regulations effortlessly!",
  imgUrl: "/assets/images/Services/hero.png",
  title2: (
    <>
      <span className="text-[#4640DE] text-[55px]">Benefits</span> <br /> Of
      filling your GST with us
    </>
  ),
  title3: (
    <>
      <span className="text-[#4640DE] text-[55px]">Easy</span> <br /> Input tax
      credit
    </>
  ),
  mobileTitle: "Key Benefits of e-filling your GST returns with us",
  features: [
    {
      title: "GST Registration",
      description:
        "GST registration is compulsory for any business that is supplying goods or services in India. Team FMR assures you seamless GST registration.",
      keyPoints: [
        "If the turnover of your business surpasses prescribed thresholds, then GST registration is compulsory.",
        "In most states, it's mandatory if your turnover exceeds Rs. 40 lakhs annually. However, in special category states like Arunachal Pradesh, Manipur, Mizoram, etc., it's mandatory if turnover exceeds Rs. 10 lakhs.",
        "For businesses having turnover either less than Rs. 1.5 crores or less than Rs. 75 lakhs for certain special category states, you have the option to choose this scheme.",
        "In some specific categories of businesses, irrespective of your turnover, you need to have GST registration. A few such business categories are Input Service Distributors, E-commerce Operators, TDS Deductors, and Non-Resident Taxable Persons.",
        "Certain business entities involved in inter-state transactions, casual taxable persons, reverse charge mechanism payers, and agents of suppliers.",
        "GST registration must be completed within 30 days once your turnover crosses the threshold.",
      ],
      cta: "Experience hassle-free GST registration with our expert guidance.",
      link: "https://filemyreturn.blog/gst-registration/",
    },
    {
      title: "GST Return Filing",
      description:
        "Regular GST filings to the tax authorities need to be made for reporting the sales, purchases and GST payments made. Count on Team FMR's expertise for seamless GST return filing.",
      keyPoints: [
        "Details of outward supplies of taxable goods and/or services affected.",
        "Simple Return in which summary of outward supplies along with Input Tax Credit is declared and payment of tax is affected by taxpayer.",
        "Return for an Input Service Distributor.",
        "Return for authorities deducting tax at source.",
        "Details of supplies effected through e-commerce operator and the amount of tax collected Monthly.",
        "Annual Return for a Normal Taxpayer.",
        "The principal manufacturer will be allowed to take credit of tax paid on purchase of goods sent on job work.",
      ],
      cta: "Experience hassle-free GST return filing with our expert guidance.",
      link: "https://filemyreturn.blog/gst-return-filing/",
    },
    {
      title: "GST LUT Filing (Letter of Undertaking)",
      description:
        "Looking to ease your GST LUT filing process? Team FMR, your trusted experts, can assist!",
      keyPoints: [
        "Exporters with a valid GSTIN can file LUT.",
        "It's essential to have exported previously or received at least one export invoice.",
        "LUT is valid for one financial year and requires annual renewal.",
        "Renew it by submitting a fresh application before the current one expires.",
        "Fulfill LUT conditions promptly, including export details submission and meeting export regulations.",
        "Keep comprehensive records for future audits.",
      ],
      cta: "For seamless GST LUT filings, exporters should consult with our GST professionals from Team FMR.",
      link: null,
    },
    {
      title: "GST Invoicing and e-Invoicing",
      description:
        "GST Invoicing along with e-Invoicing has played a pivotal role in GST regime. GoI introduced the concept of e-Invoicing for a transparent invoicing process. Team FMR offers you seamless e-invoicing services.",
      keyPoints: [
        "GST-invoice needs to correctly record suppliers and recipients details, date, description of goods & services, GSTIN, HSN code.",
        "Few categories of GST Invoices are - Tax Invoice, Bill of Supply, Receipt Voucher and Refund Voucher.",
        "Unique invoice number series must be ensured for each financial year.",
        "Earlier e-Invoicing was mandatory for businesses exceeding a specified turnover threshold but it has expanded gradually.",
        "Ensure integration of accounting software with the government's IRP portal to generate e-Invoices.",
      ],
      cta: "Consult with Team FMR experts to ensure accurate and compliant invoicing practices.",
      link: null,
    },
    {
      title: "GST Annual Return",
      description:
        "Looking for a smooth and accurate GST Annual Return filing experience? Our GST experts from Team FMR have got you covered!",
      keyPoints: [
        "All GST-registered individuals or entities including businesses, partnerships, LLPs, and companies, must file the Annual Return.",
        "Specific taxpayers such as Input Service Distributors, Composition Scheme taxpayers, Non-Resident taxpayers, and Casual Taxable Persons can avail the benefit of certain exceptions.",
        "GSTR-9C must be filed if your annual turnover exceeds the defined threshold, and you need to reconcile financial statements with GST returns.",
        "Chartered Accountant needs to certify this while also ensuring accuracy and compliance.",
      ],
      cta: "Connect with our GST expert for seamless filing. They'll guide you through documentation, reconcile financial statements, and address any concerns.",
      link: null,
    },
    {
      title: "e-Way Bill",
      description:
        "E-way bill is an electronic document required for the movement of goods valued above a specified threshold seamlessly across different states. Team FMR can assist with generation of accurate E-way bill.",
      keyPoints: [
        "The specified threshold value of goods for E-way bill may vary from state to state and is applicable to both inter-state and intra-state movement of goods with exception to certain categories.",
        "Government's e-way bill portal & various other integrated systems facilitate online e-way bill generation.",
        "The supplier, recipient, or transporter can generate the e-way bill.",
        "The distance that is to be covered by the goods determines the validity of an e-way bill.",
        "Few categories of goods like perishable goods & petroleum products and few transportation means non-motorized vehicles such as bicycles and bullock carts, are exempt.",
      ],
      cta: "Businesses and transporters must comply with the applicable e-way bill provisions. Consult with Team FMR for guidance.",
      link: null,
    },
    {
      title: "GST Registration Cancellation",
      description:
        "In cases of cessation of business operations or closure of business, you may want to get GST registration canceled. Team FMR is there to assist you with GST registration cancellation process.",
      keyPoints: [
        "Only those GST Taxpayers who are no longer liable to pay GST or those individuals or entities who have ceased business operations can apply for cancellation.",
        "Your GST cancellation application will be scrutinized by the GST officer for necessary compliance.",
        "GST taxpayer must file any pending GST returns and also clear all dues before the cancellation request is approved.",
        "The GST registration certificate must be surrendered upon cancellation.",
        "The GST taxpayer will no longer be eligible to claim input tax credit on any future purchases or expenses.",
      ],
      cta: "Connect now with our Team FMR for further details or assistance.",
      link: null,
    },
    {
      title: "Input Tax Credit",
      description:
        "Input Tax Credit or ITC is a mechanism for businesses to claim credit for the GST paid on inputs used in the supply of goods or services. Team FMR can help derive the most accurate & maximum benefit for ITC claims.",
      keyPoints: [
        "GST-registered businesses with valid tax invoices only can claim ITC for taxable supplies.",
        "Mandatory for goods/services recipient to have a tax invoice & file GST returns and for the supplier to pay GST dues.",
        "The GST tax liability on outward supplies can be offset in order of IGST credit claimed first, then CGST and SGST/UTGST.",
        "ITC will be reversed if the payment for goods or services is not made within 180 days.",
        "Complete records of invoices, debit notes, and credit notes need to be maintained.",
      ],
      cta: "Team FMR expertise helps you to efficiently optimize your GST tax liabilities with regular reconciliation of purchase database with GST returns and periodic ITC audits.",
      link: null,
    },
  ],
};

const page = () => {
  return (
    <div>
      <Services data={Data} />
    </div>
  );
};

export default page;
