import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart';
import CustomDatePickerRange from './DatePicker';

export const description = 'A line chart';

const chartData = [
  { month: 'Nov 15, 2023', score: 186 },
  { month: 'Nov 17, 2023', score: 305 },
  { month: 'Nov 19, 2023', score: 237 },
  { month: 'Nov 21, 2023', score: 73 },
  { month: 'Nov 23, 2023', score: 209 },
  { month: 'Nov 25, 2023', score: 214 },
  { month: 'Nov 27, 2023', score: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Score',
    color: 'hsl(var(--chart-1))',
  },
};

const CustomLineChart = () => {
  return (
    <Card className="rounded-[10px]">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <div className="text-[10px] text-slate-500">OVERALL SCORE</div>
            <h5 className="text-xs">Percentage of Passing Monitors by Day</h5>
          </div>
          <div>
            <CustomDatePickerRange />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[150px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 30,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              className="text-[10px]"
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="score"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CustomLineChart;
