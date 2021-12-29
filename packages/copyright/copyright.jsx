import React from 'react';
import Typography  from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '@emotion/styled';
import '@emotion/react';


export function Copyright({
  websiteUrl = `${location.protocol}//${location.hostname}`,
  companyName = 'Starter Company',
  ...props
}) {
  const fullYear = new Date().getFullYear();
 //safd asdf asdfasdf//
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {'Copyright © '}
      {fullYear}
      <Link color="inherit" href={websiteUrl}>
        {companyName}
      </Link>
      {`.  All Rights Reserved`}
    </Typography>
  );
}
