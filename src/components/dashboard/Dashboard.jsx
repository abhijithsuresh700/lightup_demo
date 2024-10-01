import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { Card, CardContent, CardTitle } from '../ui/Card';
import CustomLineChart from '../customui/LIneChart';

const dashboardItems = [
  { id: 1, label: 'Data Quality' },
  { id: 2, label: 'Incident' },
  { id: 3, label: 'Custom' },
];

const Dashboard = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="px-16 py-6">
      <div className="flex gap-8 border-b">
        {dashboardItems.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer pb-2 text-base ${
              active === item.id
                ? 'border-b border-orange-500 font-bold'
                : 'border-b border-transparent'
            }`}
            onClick={() => setActive(item.id)}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {active === 1 && (
        <>
          <div className="flex justify-between items-center mt-10">
            <div>
              <h5 className="text-sm">Summary</h5>
              <div className="text-xs flex items-center gap-1 text-slate-500">
                <span>
                  For the 24 hour period starting 11/28/2023 12:00:00 AM
                  (GMT+00:00)
                </span>
                <CiCircleInfo />
              </div>
            </div>
            <div className="border rounded-md p-2">
              <IoSettingsOutline />
            </div>
          </div>

          <div className="p-10">
            <div className="flex justify-between">
              <div className="pt-3">
                <div className="text-center h-24">
                  <h6 className="text-xs text-slate-500">
                    Total Monitored Tables
                  </h6>
                  <h2 className="text-center text-3xl font-bold mt-2">4</h2>
                </div>

                <div className="text-center pt-3">
                  <div className="text-xs flex items-center justify-center gap-1 text-slate-500">
                    <span>Completeness</span>
                    <CiCircleInfo />
                  </div>
                  <h2 className="text-center text-base font-bold mt-2 text-yellow-500">
                    87.5%
                  </h2>
                  <h6 className="text-[10px] text-yellow-500 text-center font-semibold">
                    14 / 16
                  </h6>
                </div>
              </div>
              <div className="pt-3">
                <div className="text-center h-24">
                  <h6 className="text-xs text-slate-500">
                    Total Number of Monitors
                  </h6>
                  <h2 className="text-center text-3xl font-bold mt-2">27</h2>
                </div>

                <div className="text-center pt-3">
                  <div className="text-xs flex items-center justify-center gap-1 text-slate-500">
                    <span>Accuracy</span>
                    <CiCircleInfo />
                  </div>
                  <h2 className="text-center text-base font-bold mt-2 text-teal-500">
                    100%
                  </h2>
                  <h6 className="text-[10px] text-teal-500 text-center font-semibold">
                    10 / 10
                  </h6>
                </div>
              </div>

              <div className="text-center">
                <Card className="w-full rounded-2xl p-4 shadow-lg border-0">
                  <CardTitle>
                    <div className="text-xs flex items-center justify-center gap-1 text-slate-500">
                      <span>Overall Score</span>
                      <CiCircleInfo />
                    </div>
                  </CardTitle>
                  <CardContent className="pb-0">
                    <h2 className="text-center text-3xl font-bold mt-2 text-yellow-500">
                      88.9%
                    </h2>
                    <h6 className="text-[10px] text-yellow-500 text-center font-semibold">
                      24 / 27
                    </h6>
                  </CardContent>
                </Card>
                <div className="text-center pt-3">
                  <div className="text-xs flex items-center justify-center gap-1 text-slate-500">
                    <span>Timelines</span>
                    <CiCircleInfo />
                  </div>
                  <h2 className="text-center text-base font-bold mt-2 text-slate-500">
                    N/A
                  </h2>
                  <h6 className="text-[10px] text-slate-500 text-center font-semibold">
                    N/A
                  </h6>
                </div>
              </div>
              <div className="pt-3">
                <div className="text-center h-24">
                </div>

                <div className="text-center pt-3">
                  <div className="text-xs flex items-center justify-center gap-1 text-slate-500">
                    <span>Custom</span>
                    <CiCircleInfo />
                  </div>
                  <h2 className="text-center text-base font-bold mt-2 text-red-500">
                    0%
                  </h2>
                  <h6 className="text-[10px] text-red-500 text-center font-semibold">
                    0 / 1
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <CustomLineChart />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
