import React, { useContext, useEffect, useState } from "react";
import GeneralInformation from "../../components/GeneralInformation";
import { DashboardContext, IDashboardContext } from "../../store/dashboardContext";
import { SalesData } from "../../ts/interfaces/product-interfaces";
import { getTotalSalesByYear } from "../../utils/productUtils";

const MainPage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>();

  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setSalesData(getTotalSalesByYear(selectedYear));
  }, [selectedYear]);

  return (
    <GeneralInformation
      totalSales={salesData?.totalSales}
      ecommerceSales={salesData?.ecommerceSales}
      year={salesData?.year}
    />
  );
};

export default MainPage;
