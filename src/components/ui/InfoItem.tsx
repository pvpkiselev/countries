import { Typography, Box } from '@mui/material';

interface InfoItemProps {
  label: string;
  value: string | number;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <Box display="flex" flexDirection="column" minWidth={120} gap={1}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" fontWeight="bold">
      {value}
    </Typography>
  </Box>
);

export default InfoItem;
