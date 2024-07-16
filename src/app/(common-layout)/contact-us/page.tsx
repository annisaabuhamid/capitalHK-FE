import React from "react"
import Container from "@/components/common/atom/container/Container"
import Form from "@/components/contact/Form"

const ContactUs: React.FC = () => {
  return (
    <Container>
      <div className="m-auto max-w-7xl">
        <div className="h1 mt-6 text-[34px] md:text-3xl text-center">聯絡我們</div>
        <div className="flex flex-col pb-20 pt-10 lg:flex-row">
          <div className=" flex flex-1 flex-col border-b border-b-tertiary-200 lg:border-b-0  lg:border-r lg:border-l-tertiary-200 lg:pr-8">
            <iframe
              className="h-[255px] w-full lg:h-[476px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.278628986654!2d114.24306887602941!3d22.267432879710256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404022ec8905323%3A0x5aadb11bf4048843!2sSouth%20China%20Media%20Limited!5e0!3m2!1sen!2smy!4v1690256230767!5m2!1sen!2smy"
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
            <div className="pb-8 pt-6 lg:mb-6">
              <div className="flex flex-row items-start ">
                <div className="pt-1.5">
                  <span className="flex w-6 h-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00167 19.1886L8.72282 18.376C9.5411 17.4389 10.2771 16.5497 10.932 15.704L11.4725 14.9909C13.7297 11.9497 14.8588 9.53603 14.8588 7.75203C14.8588 3.94403 11.7891 0.857178 8.00167 0.857178C4.21425 0.857178 1.14453 3.94403 1.14453 7.75203C1.14453 9.53603 2.27367 11.9497 4.53082 14.9909L5.07139 15.704C6.0056 16.9011 6.98301 18.0626 8.00167 19.1886Z"
                        stroke="#1E1E1E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.00167 10.5715C9.57963 10.5715 10.8588 9.29228 10.8588 7.71432C10.8588 6.13636 9.57963 4.85718 8.00167 4.85718C6.42372 4.85718 5.14453 6.13636 5.14453 7.71432C5.14453 9.29228 6.42372 10.5715 8.00167 10.5715Z"
                        stroke="#1E1E1E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-2 text-base">
                  香港柴灣豐業街五號華盛中心三樓3/F., Wah Shing Centre, 5 Fung Yip Street,Chai Wan, Hong Kong
                </div>
              </div>

              <div className="flex flex-row pt-4 ">
                <div className="pt-1">
                  <span className="flex w-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.5714 5H3.42857C3.04969 5 2.68633 5.15804 2.41842 5.43934C2.15051 5.72064 2 6.10218 2 6.5V18.5C2 18.8978 2.15051 19.2794 2.41842 19.5607C2.68633 19.842 3.04969 20 3.42857 20H20.5714C20.9503 20 21.3137 19.842 21.5816 19.5607C21.8495 19.2794 22 18.8978 22 18.5V6.5C22 6.10218 21.8495 5.72064 21.5816 5.43934C21.3137 5.15804 20.9503 5 20.5714 5ZM19 6.5L12 11.585L5 6.5H19ZM3.42857 18.5V7.1825L11.5929 13.115C11.7124 13.2021 11.8545 13.2488 12 13.2488C12.1455 13.2488 12.2876 13.2021 12.4071 13.115L20.5714 7.1825V18.5H3.42857Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-2 text-base">
                  <a href="mailto:info@scmedia.com.hk">info@scmedia.com.hk</a>
                </div>
              </div>

              <div className="flex flex-row pt-4">
                <div className="pt-1.5">
                  <span className="flex w-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M18.3096 15.2751C18.3096 15.5751 18.243 15.8834 18.1013 16.1834C17.9596 16.4834 17.7763 16.7667 17.5346 17.0334C17.1263 17.4834 16.6763 17.8084 16.168 18.0167C15.668 18.2251 15.1263 18.3334 14.543 18.3334C13.693 18.3334 12.7846 18.1334 11.8263 17.7251C10.868 17.3167 9.90964 16.7667 8.95964 16.0751C8.0013 15.3751 7.09297 14.6001 6.2263 13.7417C5.36797 12.8751 4.59297 11.9667 3.9013 11.0167C3.21797 10.0667 2.66797 9.11675 2.26797 8.17508C1.86797 7.22508 1.66797 6.31675 1.66797 5.45008C1.66797 4.88341 1.76797 4.34175 1.96797 3.84175C2.16797 3.33341 2.48464 2.86675 2.9263 2.45008C3.45964 1.92508 4.04297 1.66675 4.65964 1.66675C4.89297 1.66675 5.1263 1.71675 5.33464 1.81675C5.5513 1.91675 5.74297 2.06675 5.89297 2.28341L7.8263 5.00841C7.9763 5.21675 8.08464 5.40841 8.15964 5.59175C8.23464 5.76675 8.2763 5.94175 8.2763 6.10008C8.2763 6.30008 8.21797 6.50008 8.1013 6.69175C7.99297 6.88341 7.83464 7.08341 7.63464 7.28341L7.0013 7.94175C6.90964 8.03341 6.86797 8.14175 6.86797 8.27508C6.86797 8.34175 6.8763 8.40008 6.89297 8.46675C6.91797 8.53341 6.94297 8.58341 6.95964 8.63341C7.10964 8.90841 7.36797 9.26675 7.73464 9.70008C8.10964 10.1334 8.50964 10.5751 8.94297 11.0167C9.39297 11.4584 9.8263 11.8667 10.268 12.2417C10.7013 12.6084 11.0596 12.8584 11.343 13.0084C11.3846 13.0251 11.4346 13.0501 11.493 13.0751C11.5596 13.1001 11.6263 13.1084 11.7013 13.1084C11.843 13.1084 11.9513 13.0584 12.043 12.9667L12.6763 12.3417C12.8846 12.1334 13.0846 11.9751 13.2763 11.8751C13.468 11.7584 13.6596 11.7001 13.868 11.7001C14.0263 11.7001 14.193 11.7334 14.3763 11.8084C14.5596 11.8834 14.7513 11.9917 14.9596 12.1334L17.718 14.0917C17.9346 14.2417 18.0846 14.4167 18.1763 14.6251C18.2596 14.8334 18.3096 15.0417 18.3096 15.2751Z"
                        stroke="#1E1E1E"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-2 text-base ">
                  <a href="tel:+852 2202 5000">2202 5000</a>
                </div>
              </div>
              <div className="pt-4  text-base">
                廣告部熱線：<a href="tel:+852 2963 0652">2963 0652</a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </Container>
  )
}

export default ContactUs
