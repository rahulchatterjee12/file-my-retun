import React from "react";

const content = [
  {
    title: "Disclaimer Policy",
    desc: (
      <>
        By accessing this website, you agree to be bound by all the terms and
        conditions listed herein. If you do not agree with these terms, please
        do not access or <br /> use the website.
      </>
    ),
  },
  {
    title: "Use of Website Content",
    desc: (
      <>
        The material displayed on this website may be downloaded for
        non-commercial, personal use only. Any distribution, modification,
        transmission, reuse, or use of the content and facilities available on
        this website without prior written permission from the firm is strictly
        prohibited.
        <br />
        Website Changes and Termination
        <br />
        The firm reserves the right, in its sole discretion, to terminate,
        change, or suspend any aspect of this website at any time, including but
        not limited to its content or features, without prior notice or
        liability.
        <br />
        Information Accuracy and Completeness
        <br />
        All reasonable efforts are made to ensure that the information contained
        on this website is updated, accurate, and complete. However, the firm
        makes no representations or warranties, express or implied, regarding
        the reliability, accuracy, or completeness of the information. The
        content is provided "as is" and "as available."
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    desc: (
      <>
        In no event shall the firm, its service providers, or website providers
        be liable for any direct, indirect, incidental, or consequential damages
        arising from the use or inability to use this website, including but not
        limited to, loss of revenue, anticipated profits, business, or sales.
        This limitation of liability applies to all claims, whether based on
        warranty, contract, tort, or any other legal theory, and whether or not
        the firm has been advised of the possibility of such damages.
      </>
    ),
  },
  {
    title: "External Links",
    desc: (
      <>
        This website may provide links to external websites or resources
        operated by third parties. The firm has no control over these sites and
        does not endorse or assume any responsibility for their content,
        advertising, products, services, or other materials available. The
        inclusion of any link does not imply any endorsement by the firm of the
        website. The firm shall not be liable for any loss or damage caused or
        alleged to be caused by or in connection with the use of or reliance on
        any content, goods, or services available on or through any linked site.
      </>
    ),
  },
  {
    title: "No Warranty",
    desc: (
      <>
        The site, including all content, functions, and information made
        available on or accessed through the site, is provided on an "as is" and
        "as available" basis without representations or warranties of any kind,
        either express or implied, including, but not limited to, warranties of
        non-infringement, merchantability, or fitness for a particular purpose.
        The firm does not warrant that the site or its functions, features, or
        content will be timely, secure, uninterrupted, or error-free, or that
        defects will be corrected. No advice or information, whether oral or
        written, obtained by you from the firm or through this website shall
        create any warranty not expressly stated herein.
      </>
    ),
  },
  {
    title: "Service Provider Liability",
    desc: (
      <>
        The website is hosted by a service provider. The firm holding the
        website and the end users should refer to the original sources or
        government publications for the most accurate and reliable information.
        The service provider/website provider is not liable for the content
        provided on the website and disclaims all liability for any inaccuracies
        or errors in the information presented.
      </>
    ),
  },
  {
    title: "Governing Law",
    desc: (
      <>
        This disclaimer policy and any disputes related to it shall be governed
        by and construed in accordance with the laws of India, without regard to
        its conflict of law principles.
      </>
    ),
  },
  {
    title: "Contact Information",
    desc: (
      <>
        If you have any questions or concerns regarding this disclaimer policy,
        please contact us at the numbers provided in the contact us section.
      </>
    ),
  },
];

const Footer = () => {
  return (
    <div className="px-[17px] md:px-[145px] py-[54px] md:py-[70px] bg-[#293854] text-white items-center ">
      <div className="flex justify-center flex-col md:flex-row md:justify-start  gap-[88px] md:text-start text-center">
        <div>
          <h3 className="text-[24px]">FILEMYRETURN</h3>
          <p className="mt-[24px]">
            404, 4th Floor, <br />
            DLF Galleria Towers, DLF Phase IV, <br />
            Gurgaon-122009, Haryana
          </p>
          <p className="mt-[20px]">
            +91- 99100 11642, +91- 95992 83224 <br />
            info@filemyreturn.co.in
          </p>
          <p className="mt-[20px]" />
          11AM to 5PM IST Mon to Sat
          <p />
        </div>
        <div className="flex justify-center mb-[36px]">
          <div className="flex md:relative flex-col justify-center md:justify-start">
            <img
              src="/assets/images/map.png"
              alt="map"
              className="w-[188px] md:w-[348px] h-[188px] md:h-[348px]"
            />
            <button className="md:absolute w-[132px] ml-[23px]  md:-right-10 px-[8px] py-[4px] border-[1px] rounded-[13px]">
              Get directions
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-[.5px] border-white pt-[36px]">
        {content.map((item, i) => (
          <div key={i} className="mt-[10px]">
            <h3 className="text-[16px] font-extrabold">{item.title}</h3>
            <p className="text-[16px] mt-[5px] font-light">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-[83px]">
        © Copyright filemyreturn.co.in. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
