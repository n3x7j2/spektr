import { Box, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { useGetAppConfig } from '~/hooks/api';

const Brand = () => {
  const { data: appConfigData, isLoading } = useGetAppConfig();

  return (
    <Box sx={{ height: 80, minWidth: 300, px: 2, py: '15px', display: 'flex' }}>
      <Box component={Link} href="/">
        <Image
          src="/logo.svg"
          alt="SPEKTR ERP"
          priority
          height={50}
          width={39}
          style={{ width: 'auto', height: '100%' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textTransform: 'uppercase',
          pl: 2,
        }}
      >
        <Typography component="h5" variant="subtitle1">
          SPEKTR ERP 10.0
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.5, mt: 0.5 }}>
          {isLoading ? (
            <Skeleton animation="wave" variant="text" />
          ) : (
            appConfigData?.abpConfigurationDto?.currentTenant?.name
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Brand;
