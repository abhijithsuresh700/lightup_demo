import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

import { PiBuildings } from 'react-icons/pi';
import { FaRegDotCircle } from 'react-icons/fa';
import { TbChartCandle } from 'react-icons/tb';
import { MdFormatListNumbered } from 'react-icons/md';
import { PiWarningLight } from 'react-icons/pi';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const items = [
  { id: 1, icon: <FaRegDotCircle />, label: 'Explorer' },
  { id: 2, icon: <TbChartCandle />, label: 'Metrics' },
  { id: 3, icon: <MdFormatListNumbered />, label: 'Monitors' },
  { id: 4, icon: <PiWarningLight />, label: 'Incidents' },
  { id: 5, icon: <IoSpeedometerOutline />, label: 'Dashboards' },
];

const Header = ({ active, onClick }) => {

  return (
    <Card className="w-full rounded-2xl px-4">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-3 items-center">
            <div className="p-4 rounded-2xl border" onClick={() => onClick(0)}>
              <PiBuildings className="text-4xl cursor-pointer"/>
            </div>
            <h6 className="font-bold">Demo</h6>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 text-sm cursor-pointer pb-2 ${
                active === item.id
                  ? 'border-b border-orange-500'
                  : 'border-b border-transparent'
              }`}
              onClick={() => onClick(item.id)}
            >
              {item.icon} <span>{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
