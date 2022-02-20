import React, { useContext, useEffect, useState } from "react";
import SalesAreaChart from "../../components/Charts/AreaChart";
import SimpleBarChart from "../../components/Charts/SimpleBarChart";
import ChartViewBox from "../../components/ChartViewBox";
import GeneralInformation from "../../components/GeneralInformation";
import { DashboardContext, IDashboardContext } from "../../store/dashboardContext";
import { Products } from "../../ts/enums/product-enums";
import { IAreaChart, IBarChart } from "../../ts/interfaces/graph-interfaces";
import { SalesData } from "../../ts/interfaces/product-interfaces";
import { getBarChartDataByProduct, getLineChartDataByProduct } from "../../utils/chartUtils";
import { getTotalSalesByYear } from "../../utils/productUtils";
import { PageContainer } from "./styles";

const BooksPage: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesData>();
  const [lineChartData, setLineChartData] = useState<IAreaChart[]>();
  const [barChartData, setBarChartData] = useState<IBarChart[]>();

  const { selectedYear }: IDashboardContext = useContext(DashboardContext);

  useEffect(() => {
    setSalesData(getTotalSalesByYear(selectedYear, Products.BooksAndMagazines));
  }, [selectedYear]);

  useEffect(() => {
    setLineChartData(getLineChartDataByProduct(Products.BooksAndMagazines));
    setBarChartData(getBarChartDataByProduct(Products.BooksAndMagazines));
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
      <ChartViewBox title="Yearly Sales">
        {barChartData && <SimpleBarChart data={barChartData} />}
      </ChartViewBox>
    </PageContainer>
  );
};

export default BooksPage;
