import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import contactImage from "../../assets/contactBanner.jpg";
import { style } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/customButtons/customButton";
import Badges from "../../components/badges/badges";
import { toast, ToastContainer } from "react-toastify";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from '@mui/material/Checkbox';

interface ContactFormValues {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  townCity: string;
  province: string;
  zipCode: string;
  phone: number;
  email: string;
  additionalInformation: string;
}

const CheckOut = () => {
  const dispatch = useDispatch();
  const allContact = useSelector((state: any) => state.users.allUsers);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast.success("Submitted", {
      position: "top-right",
      className: "foo-bar",
    });
    // Dispatch data here
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "66px",
          height: "400px",
        }}
      ></Box>

      <Box sx={style.mainBox}>
        <Box
          sx={{
            background: "white",
            display: "flex",
            flexWrap:"wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Box
              sx={{
                maxWidth: 550,
                background: "white",
                padding: "30px",
              }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Typography sx={style.billTitle}>Billing details</Typography>

              <Box sx={{ display: "flex",
              flexDirection:{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"},
               justifyContent: "space-between" }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...register("firstName", {
                    required: "Enter your first name",
                  })}
                  sx={{ marginTop: "20px", 
                    marginRight:{xs:"0px",sm:"0px",md:"10px",lg:"10px",xl:"10px"} }}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />

                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...register("lastName", {
                    required: "Enter your last name",
                  })}
                  sx={{ marginTop: "20px",  }}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </Box>

              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                {...register("companyName")}
                sx={{ marginTop: "20px",  }}
              />

              <FormControl fullWidth sx={{ marginTop: "20px",  }}>
                <InputLabel>Country / Region</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Country / Region">
                      <MenuItem value="Pakistan">Pakistan</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <TextField
                label="Street Address"
                variant="outlined"
                fullWidth
                {...register("streetAddress", {
                  required: "Enter street address",
                })}
                sx={{ marginTop: "20px", }}
                error={!!errors.streetAddress}
                helperText={errors.streetAddress?.message}
              />

              <TextField
                label="Town / City"
                variant="outlined"
                fullWidth
                {...register("townCity", { required: "Enter town or city" })}
                sx={{ marginTop: "20px",  }}
                error={!!errors.townCity}
                helperText={errors.townCity?.message}
              />

              <FormControl fullWidth sx={{ marginTop: "20px",  }}>
                <InputLabel>Province</InputLabel>
                <Controller
                  name="province"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Province">
                      <MenuItem value="Punjab">Punjab</MenuItem>
                      <MenuItem value="KPK">KPK</MenuItem>
                      <MenuItem value="Sindh">Sindh</MenuItem>
                      <MenuItem value="Balochistan">Balochistan</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <TextField
                label="Zip Code"
                variant="outlined"
                fullWidth
                {...register("zipCode", { required: "Enter zip code" })}
                sx={{ marginTop: "20px", }}
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message}
              />

              <TextField
                label="Phone"
                type="number"
                variant="outlined"
                fullWidth
                {...register("phone", { required: "Enter your phone number" })}
                sx={{ marginTop: "20px", }}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />

              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                {...register("email", { required: "Enter your email" })}
                sx={{ marginTop: "20px",  }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                label="Additional Information"
                variant="outlined"
                fullWidth
                {...register("additionalInformation")}
                sx={{ marginTop: "20px"}}
              />

              <Button type="submit" sx={{ marginTop: "20px" }}>
                <CustomButton buttonText="Submit" />
              </Button>
            </Box>
          </Box>

          <Box maxWidth={480} sx={{ padding: "10px",marginTop:{xs:"5px",sm:"5px",md:'5px',lg:"50px",xl:"50px"}  }}>
           
            <FormGroup sx={style.optionTitle}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                // sx={style.optionTitle}
                // style={{fontFamily: "Poppins",
                //   fontSize: '16px',
                //   fontWeight: "400",
                //   lineHeight: '0px',
                //   textAlign: 'left',
                //   color:'black',
                //   }}
                  label="Direct Bank Transfer"

                
                
              />
              <Typography sx={style.optionDescription}>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</Typography>
              <FormControlLabel
                // required
                style={{color:"#9F9F9F"}}
                control={<Checkbox />}
                label="Direct Bank Transfer"
              />
              <FormControlLabel
                // disabled
                style={{color:"#9F9F9F"}}
                control={<Checkbox />}
                label="Cash On Delivery"
              />
              <Typography sx={style.optionDescription} >
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </Typography>
            </FormGroup>
          </Box>
        </Box>
      </Box>

      <Badges />
    </>
  );
};

export default CheckOut;
