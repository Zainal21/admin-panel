import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function Dashboard({
    auth,
    statistics,
}: PageProps<{ statistics: any }>) {
    const [charts, setCharts] = useState<
        { status: string; options: ApexOptions; series: number[] }[]
    >([]);

    useEffect(() => {
        const processedData = statistics.map((item: any) => {
            const labels = Object.keys(item.total_units);
            const series = Object.values(item.total_units);

            return {
                status: item.status,
                options: {
                    dataLabels: {
                        formatter: function (
                            val: any,
                            opts: {
                                w: { config: { series: { [x: string]: any } } };
                                seriesIndex: string | number;
                            }
                        ) {
                            return opts.w.config.series[opts.seriesIndex];
                        },
                    },
                    chart: {
                        width: 380,
                        type: "pie",
                    },
                    labels: labels,
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200,
                                },
                                legend: {
                                    position: "bottom",
                                },
                            },
                        },
                    ],
                },
                series: series as number[],
            };
        });

        setCharts(processedData);
    }, [statistics]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800  leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white  overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">
                            <span className="font-semibold">
                                WELCOME TO ADMIN PANEL
                            </span>
                        </div>
                        <div className="container mx-10 flex flex-wrap">
                            {charts.map((chart, index) => (
                                <div key={index} className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                        {chart.status}
                                    </h3>
                                    <ReactApexChart
                                        options={chart.options as ApexOptions}
                                        series={chart.series}
                                        type="pie"
                                        width={380}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
