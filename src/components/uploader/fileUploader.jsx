// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Box, Grid, styled, Typography } from '@mui/material'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10),
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    width: 250,
  },
}))

const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
  },
}))

const FileUploaderSingle = ({ setData }) => {
  const [files, setFiles] = useState([])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    onDrop: async (acceptedFiles) => {
      try {
        const formData = new FormData()
        formData.append('file', acceptedFiles[0])

        /* File Upload */
      } catch (err) {
        console.log('ERROR : ', err)
      }
    },
  })

  const img = files.map((file) => (
    <img
      width="300"
      key={file.name}
      alt={file.name}
      className="single-file-image"
      src={URL.createObjectURL(file)}
    />
  ))

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Grid container spacing={6}>
            <Grid item xs={5}>
              <Img width={300} alt="Upload img" src="/image/upload.png" />
            </Grid>
            <Grid item xs={7}>
              <HeadingTypography sx={{ py: 20, px: 5 }} variant="h5">
                이미지 파일을 등록해주세요.
              </HeadingTypography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        {files.length ? img : null}
      </Grid>
    </Grid>
  )
}

export default FileUploaderSingle
