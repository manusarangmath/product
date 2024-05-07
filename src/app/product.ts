export interface Product {
intrialMax: any;
metricMean: any;
metricMax: any;
intrialMean: any;
id: any;
editproductId: any;
productCode: any;
isActive: any;
initialMaxValue: any;
initialMeanValue: any;

    productId?: number; // Primary key, auto-incremented
    code: string; // Product code, unique
    intrialMeanValue: number; // Initial mean value (decimal)
    intrialMaxValue: number; // Initial max value (decimal)
    metricMeanValue: number; // Metric mean value (decimal)
    metricMaxValue: number; // Metric max value (decimal)
    units: string; // Units (varchar of size 10)
    active: boolean; // Active status (true/false)
    createdBy: string; // Created by (varchar)
    createdDate: Date; // Created date
    modifiedBy: string; // Modified by (varchar)
    modifiedDate: Date; // Modified date
    productDate: Date; // Product date
}

