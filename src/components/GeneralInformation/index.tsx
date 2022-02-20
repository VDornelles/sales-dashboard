import React from "react";
import YearSelection from "./YearSelection";
import { InformationCard, InformationData, VerticalSeparator } from "./styles";

interface IGeneralInformation {
  totalSales?: number;
  ecommerceSales?: number;
  year?: number;
}

const GeneralInformation: React.FC<IGeneralInformation> = ({
  totalSales = 10000,
  ecommerceSales = 8000,
  year = 2015,
}) => {
  return (
    <InformationCard>
      <InformationData>
        <p>Year</p>
        <YearSelection />
      </InformationData>
      <VerticalSeparator />
      <InformationData>
        <p>Total Sales</p>
        <p>{totalSales}</p>
      </InformationData>
      <VerticalSeparator />
      <InformationData>
        <p>Total Ecommerce Sales</p>
        <p>{ecommerceSales}</p>
      </InformationData>
      <VerticalSeparator />
      <InformationData>
        <p>Ecommerce Sales Percentage</p>
        <p>{`${((ecommerceSales / totalSales) * 100).toFixed(2)}%`}</p>
      </InformationData>
    </InformationCard>
  );
};

export default GeneralInformation;
