import React, { useContext, useEffect, useState } from "react";
import SalesPieChart from "../../components/Charts/PieChart";
import StackedBarChart from "../../components/Charts/StackedBarChart";
import ChartViewBox from "../../components/ChartViewBox";
import GeneralInformation from "../../components/GeneralInformation";
import { DashboardContext, IDashboardContext } from "../../store/dashboardContext";
import { IPieChart } from "../../ts/interfaces/graph-interfaces";
import { SalesData } from "../../ts/interfaces/product-interfaces";
import { getPieChartDataByYear } from "../../utils/chartUtils";
import { getTotalSalesByYear } from "../../utils/productUtils";
import { PageContainer } from "./styles";

const HomePage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>();
  const [pieChartData, setPieChartData] = useState<IPieChart[]>();

  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setPieChartData(getPieChartDataByYear(selectedYear));
  }, [selectedYear]);

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
      <ChartViewBox title="Ecommerce/Non Ecommerce Sales Share">
        <StackedBarChart />
      </ChartViewBox>
      <ChartViewBox title="Total Sales Share by Product">
        {pieChartData && <SalesPieChart data={pieChartData} />}
      </ChartViewBox>
    </PageContainer>
  );
};

export default HomePage;
