import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

type DateValue = {
  day: number | '';
  month: number | '';
  year: number | '';
};

interface DateRangeProps {
  onChange?: (range: { start: DateValue; end: DateValue }) => void;
}

const DateRange: React.FC<DateRangeProps> = ({ onChange }) => {
  const [start, setStart] = useState<DateValue>({ day: '', month: '', year: '' });
  const [end, setEnd] = useState<DateValue>({ day: '', month: '', year: '' });

  const handleChange = (
    type: 'start' | 'end',
    field: keyof DateValue,
    value: number | ''
  ) => {
    const updater = type === 'start' ? setStart : setEnd;
    const newValue = { ...(type === 'start' ? start : end), [field]: value };
    updater(newValue);
    if (onChange) {
      onChange({
        start: type === 'start' ? newValue : start,
        end: type === 'end' ? newValue : end,
      });
    }
  };

  const handleClear = () => {
    setStart({ day: '', month: '', year: '' });
    setEnd({ day: '', month: '', year: '' });
    if (onChange) {
      onChange({ start: { day: '', month: '', year: '' }, end: { day: '', month: '', year: '' } });
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <div>Start Date</div>
        <Box display="flex" gap={1}>
          <TextField
            select
            label="Day"
            value={start.day}
            onChange={e => handleChange('start', 'day', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 80 }}
          >
            <MenuItem value="">--</MenuItem>
            {days.map(day => (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Month"
            value={start.month}
            onChange={e => handleChange('start', 'month', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 120 }}
          >
            <MenuItem value="">--</MenuItem>
            {months.map(month => (
              <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Year"
            value={start.year}
            onChange={e => handleChange('start', 'year', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 100 }}
          >
            <MenuItem value="">--</MenuItem>
            {years.map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box>
        <div>End Date</div>
        <Box display="flex" gap={1}>
          <TextField
            select
            label="Day"
            value={end.day}
            onChange={e => handleChange('end', 'day', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 80 }}
          >
            <MenuItem value="">--</MenuItem>
            {days.map(day => (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Month"
            value={end.month}
            onChange={e => handleChange('end', 'month', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 120 }}
          >
            <MenuItem value="">--</MenuItem>
            {months.map(month => (
              <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Year"
            value={end.year}
            onChange={e => handleChange('end', 'year', e.target.value === '' ? '' : Number(e.target.value))}
            size="small"
            style={{ width: 100 }}
          >
            <MenuItem value="">--</MenuItem>
            {years.map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Button variant="outlined" onClick={handleClear}>Clear</Button>
    </Box>
  );
};

export default DateRange;