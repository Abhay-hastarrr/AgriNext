import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const OurPolicy = () => {

  const {t}  = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">{t('Easy_Exchange')}</p>
        <p className="text-gray-400">{t('Easy_Exchange_desc')}</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">{t('Return_Policy')}</p>
        <p className="text-gray-400">{t("Return_Policy_desc")}</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">{t("Customer_Support")}</p>
        <p className="text-gray-400">{t("Customer_support_desc")}</p>
      </div>

    </div>
  );
};

export default OurPolicy;