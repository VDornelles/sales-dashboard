import React, { useContext, useEffect, useState } from "react";
import SalesPieChart from "../../components/Charts/PieChart";
import StackedBarChart from "../../components/Charts/StackedBarChart";
import ChartViewBox from "../../components/ChartViewBox";
import GeneralInformation from "../../components/GeneralInformation";
import { DashboardContext, IDashboardContext } from "../../store/dashboardContext";
import { SalesData } from "../../ts/interfaces/product-interfaces";
import { getTotalSalesByYear } from "../../utils/productUtils";
import { PageContainer } from "./styles";

const MainPage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>();

  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setSalesData(getTotalSalesByYear(selectedYear));
  }, [selectedYear]);

  return (
    <PageContainer>
      <GeneralInformation
        totalSales={salesData?.totalSales}
        ecommerceSales={salesData?.ecommerceSales}
        year={salesData?.year}
      />
      <ChartViewBox>
        <StackedBarChart />
      </ChartViewBox>
      <ChartViewBox>
        <SalesPieChart />
      </ChartViewBox>
    </PageContainer>
  );
};

export default MainPage;
