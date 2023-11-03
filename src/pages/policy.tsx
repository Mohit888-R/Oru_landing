import useResponsive from "@/hooks/useResponsive";
import { ChevronRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Privacy = () => {
  const isLg = useResponsive("lg");
  return (
    <div className="">
      <Head>
        <title>Privacy & Policy | ORUphones</title>
      </Head>
      <div className="navbarClearance w-full pt-24" />

      {/* breadcrum is only desktop view */}
      {isLg && (
        <span className="container my-4 flex text-brand-gray">
          <Link href={`/`} className="underline">
            Home Page
          </Link>
          <span className="flex">
            <ChevronRight />
            <span className="">Privacy & Policy</span>
          </span>
        </span>
      )}

      {/* privacy and policy banner */}
      <div className="m-auto flex flex-col  items-center justify-center gap-8 md:flex-row ">
        <Image
          src="/assets/privacypolicyoru.svg"
          width={288}
          height={288}
          className="m-auto md:m-0"
          alt="privacy policy oruphones"
        />
        <div className="text-center md:text-left">
          <span className=" text-[24px] font-semibold uppercase md:text-[32px]">
            MOBILICIS INDIA PRIVATE LIMITED
          </span>
          <h2 className="text-normal pb-4 text-[18px] md:text-[24px]">
            Privacy Policy of www.oruphones.com
          </h2>
        </div>
      </div>
      <div className="bg-border">
        <div className="container  py-4">
          <div className="my-8 space-y-4 rounded-md bg-white p-4 px-10">
            <div className="space-y-2 py-2">
              <span className="titletext">
                Privacy Policy - Current [updated on August 01, 2022]
              </span>
              <p className="paratext">
                We care about your privacy and are committed to protecting your
                personal data. This privacy statement will inform you on how we
                handle your personal data, your privacy rights and how the law
                protects you. Please read this privacy statement carefully
                before using our Services. This privacy statement applies to
                your use of any products, services, content, features,
                technologies, or functions, and all related websites, mobile
                apps, mobile sites or other online platforms or applications
                offered to you by us (collectively the "Services/Platform").
              </p>
            </div>
            <div className="space-y-2 ">
              <span className="titletext">Who are we?</span>
              <p className="paratext">
                MOBILICIS INDIA PRIVATE LIMITED, a company incorporated and
                registered in India, is the data controller for the personal
                data collected through this Platform. (“we”, “our” or “us”) take
                the security of your personal data very seriously and are
                committed to protecting and respecting the privacy of the users
                (“you” or “your”) of our ORUphones Website and App (the
                “Platform”).
              </p>
            </div>
          </div>

          <div className="my-8 rounded-md bg-white p-4 px-10">
            <div className="titletext">Interpretation and Definitions</div>

            <div className="space-y-2 py-2">
              <span className="titletext">Interpretation </span>
              <p className="paratext">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Definitions</div>
              <div className="paratext">
                For the purposes of this Privacy Policy:
                <ul className="list-decimal pl-4">
                  <li>
                    You means the individual accessing or using the Service, or
                    the company, or other legal entity on behalf of which such
                    individual is accessing or using the Service, as applicable.
                  </li>
                  <li>
                    Company (referred to as either "the Company", "I", "We",
                    "Us" or "Our" in this Agreement) refers to MOBILICIS INDIA
                    PRIVATE LIMITED that owns website ORUphones.com{" "}
                  </li>
                  <li>
                    Affiliate means an entity that controls, is controlled by or
                    is under common control with a party, where "control" means
                    ownership of 50% or more of the shares, equity interest or
                    other securities entitled to vote for election of directors
                    or other managing authority.
                  </li>
                  <li>
                    {" "}
                    Account means a unique account created for You to access our
                    Service or parts of our Service.{" "}
                  </li>
                  <li>
                    Website refers to ORUphones, accessible from
                    https://www.oruphones.com{" "}
                  </li>
                  <li>Service refers to the Website.</li>
                  <li> Country refers to: India</li>
                  <li>
                    Service Provider means any natural or legal person who
                    processes the data on behalf of the Company. It refers to
                    third-party companies or individuals employed by the Company
                    to facilitate the Service, to provide the Service on behalf
                    of the Company, to perform services related to the Service
                    or to assist the Company in analyzing how the Service is
                    used.{" "}
                  </li>
                  <li>
                    Third-party Social Media Service refers to any website or
                    any social network website through which a User can log in
                    or create an account to use the Service.{" "}
                  </li>
                  <li>
                    Personal Data is any information that relates to an
                    identified or identifiable individual.{" "}
                  </li>
                  <li>
                    Cookies are small files that are placed on Your computer,
                    mobile device or any other device by a website, containing
                    the details of Your browsing history on that website among
                    its many uses.
                  </li>
                  <li>
                    Device means any device that can access the Service such as
                    a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    Usage Data refers to data collected automatically, either
                    generated by the use of the Service or from the Service
                    infrastructure itself (for example, the duration of a page
                    visit).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-8 rounded-md bg-white p-4 px-10">
            <div className="space-y-2 py-2">
              <div className="titletext">Tracking Technologies and Cookies</div>
              <p className="paratext">
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. You
                can instruct Your browser to refuse all Cookies or to indicate
                when a Cookie is being sent. However, if You do not accept
                Cookies, You may not be able to use some parts of our Service.
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close your web browser. Learn more about cookies in the "What
                Are Cookies" article.
              </p>
            </div>
            <div className="titletext space-y-2 py-2">
              We use both session and persistent Cookies for the purposes set
              out below:
            </div>
            <br></br>
            <div className="space-y-2">
              <div className="titletext">Necessary / Essential Cookies</div>
              <div className="space-y-2">
                <ul className="text-gray flex gap-4 text-[14px]  opacity-60">
                  <li>Type: Session Cookies</li>
                  <li>Administered by: Us</li>
                </ul>
              </div>
              <p className="paratext">
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </div>
            <div className="space-y-2">
              <div className="titletext">
                Cookies Policy/Notice Acceptance Cookies
              </div>
              <div className="space-y-2">
                <ul className=" text-gray flex gap-4 text-[14px]  opacity-60">
                  <li>Type: Session Cookies</li>
                  <li>Administered by: Us</li>
                </ul>
              </div>
              <p className="paratext">
                These Cookies identify if users have accepted the use of cookies
                on the Website.
              </p>
            </div>
            <div className="space-y-2">
              <div className="titletext">Functionality Cookies</div>
              <div className="space-y-2">
                <ul className="text-gray flex gap-4 text-[14px]  opacity-60">
                  <li>Type: Session Cookies</li>
                  <li>Administered by: Us</li>
                </ul>
              </div>
              <p className="paratext">
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </div>
          </div>

          <div className="my-8 rounded-md bg-white p-4 px-10">
            <div className="titletext">
              Collecting and Using Your Personal Data
            </div>
            <div className="titletext -mt-2">Types of Data Collected:</div>
            <br />
            <div className="space-y-2">
              <div className="titletext">Personal Data</div>
              <div className="paratext">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
                <ul className="list-decimal ml-4">
                  <li>Email address</li>
                  <li> Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Usage Data</li>
                </ul>
              </div>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Usage Data</div>
              <p className="paratext">
                sage Data is collected automatically when using the Service.
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data. When You
                access the Service by or through a mobile device, We may collect
                certain information automatically, including, but not limited
                to, the type of mobile device You use, Your mobile device unique
                ID, the IP address of Your mobile device, Your mobile operating
                system, the type of mobile Internet browser You use, unique
                device identifiers and other diagnostic data. We may also
                collect information that Your browser sends whenever You visit
                our Service or when You access the Service by or through a
                mobile device.
              </p>
            </div>

            <div className="space-y-2 py-2">
              <div className="titletext">Use of Your Personal Data</div>
              <div className="paratext">
                The Company may use Personal Data for the following purposes:
                <ul className="ml-4 list-decimal">
                  <li>
                    To provide and maintain our Service, including to monitor
                    the usage of our Service.
                  </li>
                  <li>
                    To manage Your Account: to manage Your registration as a
                    user of the Service. The Personal Data You provide can give
                    You access to different functionalities of the Service that
                    are available to You as a registered user.
                  </li>
                  <li>
                    {" "}
                    For the performance of a contract: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.{" "}
                  </li>
                  <li>
                    To contact You: To contact You by email, telephone calls,
                    SMS, or other equivalent forms of electronic communication,
                    such as a mobile application's push notifications regarding
                    updates or informative communications related to the
                    functionalities, products or contracted services, including
                    the security updates, when necessary or reasonable for their
                    implementation.{" "}
                  </li>
                  <li>
                    To provide You with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless You have opted not to
                    receive such information.{" "}
                  </li>
                  <li>
                    To manage Your requests: To attend and manage Your requests
                    to Us.{" "}
                  </li>
                  <li>
                    We may share your personal information in the following
                    situations:{" "}
                  </li>
                  <li>
                    With Service Providers: We may share Your personal
                    information with Service Providers to monitor and analyze
                    the use of our Service, to advertise on third party websites
                    to You after You visited our Service, to contact You.{" "}
                  </li>
                  <li>
                    For Business transfers: We may share or transfer Your
                    personal information in connection with, or during
                    negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.{" "}
                  </li>
                  <li>
                    With Affiliates: We may share Your information with Our
                    affiliates, in which case we will require those affiliates
                    to honor this Privacy Policy. Affiliates include Our parent
                    company and any other subsidiaries, joint venture partners
                    or other companies that We control or that are under common
                    control with Us.
                  </li>
                  <li>
                    {" "}
                    With Business partners: We may share Your information with
                    Our business partners to offer You certain products,
                    services or promotions.
                  </li>
                  <li>
                    {" "}
                    With other users: when You share personal information or
                    otherwise interact in the public areas with other users,
                    such information may be viewed by all users and may be
                    publicly distributed outside. If You interact with other
                    users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see You name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Retention of Your Personal Data</div>
              <p className="paratext">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
            </div>

            <div className="space-y-2 py-2">
              <div className="titletext">Transfer of Your Personal Data</div>
              <div className="space-y-2 py-2">
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction. Your consent to
                this Privacy Policy followed by Your submission of such
                information represents Your agreement to that transfer. The
                Company will take all steps reasonably necessary to ensure that
                Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </div>
            </div>

            <div className="titletext">Disclosure of Your Personal Data</div>
            <div className="space-y-2 py-2">
              <div className="titletext">Business Transactions</div>
              <p className="paratext">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
            </div>

            <div className="space-y-2 py-2">
              <div className="titletext">Law enforcement</div>
              <p className="paratext">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Other legal requirements</div>
              <p className="paratext">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
                <br /> 1. Comply with a legal obligation
                <br />
                2. Protect and defend the rights or property of the Company
                <br /> 3. Prevent or investigate possible wrongdoing in
                connection with the Service <br /> 4. Protect the personal
                safety of Users of the Service or the public <br />
                5. Protect against legal liability <br />
                6. Security of Your Personal Data
                <br />
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
            </div>

            <div className="space-y-2 py-2">
              <div className="titletext">
                Detailed Information on the Processing of Your Personal Data
              </div>
              <p className="paratext">
                Service Providers have access to Your Personal Data only to
                perform their tasks on Our behalf and are obligated not to
                disclose or use it for any other purpose.
              </p>
            </div>

            <div className="space-y-2 py-2">
              <div className="titletext">Behavioral Remarketing</div>
              <p className="paratext">
                As described above, we use your Personal Information to provide
                you with targeted advertisements or marketing communications we
                believe may be of interest to you.
                <br /> You can opt out of targeted advertising by: <br />
                INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED.
                <br />
                COMMON LINKS INCLUDE:
                <br /> FACEBOOK - https://www.facebook.com/settings/?tab=ads{" "}
                <br />
                BING -
                https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                <br />
                Additionally, you can opt out of some of these services by
                visiting the Digital Advertising Alliance’s opt-out portal at:
                http://optout.aboutads.info/.
              </p>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Children's Privacy</div>
              <p className="paratext">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers. If We need to rely on consent as a
                legal basis for processing Your information and Your country
                requires consent from a parent, We may require Your parent's
                consent before We collect and use that information.
              </p>
            </div>
          </div>
          <div className="my-8 rounded-md bg-white p-4 px-10">
            <div className="space-y-2 py-2">
              <div className="titletext">Links to Other Websites</div>
              <p className="paratext">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third-party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third-party sites or
                services.
              </p>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Changes to this Privacy Policy</div>
              <p className="paratext">
                We may update our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. We will let You know via email and/or a prominent
                notice on Our Service, prior to the change becoming effective
                and update the "Last updated" date at the top of this Privacy
                Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
            </div>
            <div className="space-y-2 py-2">
              <div className="titletext">Contact Us</div>
              <p className="paratext">
                If you have any questions about this Privacy Policy, You can
                contact us:
                <br /> By email: contact@oruphones.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
