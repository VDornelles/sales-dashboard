import React, { useContext, useEffect, useState } from "react";
import SalesAreaChart from "../../components/Charts/AreaChart";
import SalesPieChart from "../../components/Charts/PieChart";
import ChartViewBox from "../../components/ChartViewBox";
import GeneralInformation from "../../components/GeneralInformation";
import { DashboardContext, IDashboardContext } from "../../store/dashboardContext";
import { Products } from "../../ts/enums/product-enums";
import { ILineChart, IPieChart } from "../../ts/interfaces/graph-interfaces";
import { SalesData } from "../../ts/interfaces/product-interfaces";
import { getLineChartDataByProduct, getPieChartDataByYear } from "../../utils/chartUtils";
import { getTotalSalesByYear } from "../../utils/productUtils";
import { PageContainer } from "./styles";

const BooksPage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>();
  const [pieChartData, setPieChartData] = useState<IPieChart[]>();
  const [lineChartData, setLineChartData] = useState<ILineChart[]>();

  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setPieChartData(getPieChartDataByYear(selectedYear));
    setSalesData(getTotalSalesByYear(selectedYear, Products.BooksAndMagazines));
  }, [selectedYear]);

  useEffect(() => {
    setLineChartData(getLineChartDataByProduct(Products.BooksAndMagazines));
  }, []);

  return (
    <PageContainer>
      <GeneralInformation
        totalSales={salesData?.totalSales}
        ecommerceSales={salesData?.ecommerceSales}
        year={salesData?.year}
      />
      <ChartViewBox title="Total Yearly Sales">
        {lineChartData && <SalesAreaChart data={lineChartData} />}
      </ChartViewBox>
    </PageContainer>
  );
};

export default BooksPage;
