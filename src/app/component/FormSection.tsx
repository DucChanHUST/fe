"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect, use } from "react";
import { getAllocation } from "../service/api";

const FormSection = () => {
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [formData, setFormData] = useState([
    {
      bin_number: 251,
      lower_bound: 2510,
      upper_bound: 2520,
      allocation_percentage: 2.86,
    },
    {
      bin_number: 252,
      lower_bound: 2520,
      upper_bound: 2530,
      allocation_percentage: 4.99,
    },
    {
      bin_number: 253,
      lower_bound: 2530,
      upper_bound: 2540,
      allocation_percentage: 7.75,
    },
    {
      bin_number: 254,
      lower_bound: 2540,
      upper_bound: 2550,
      allocation_percentage: 11.08,
    },
    {
      bin_number: 255,
      lower_bound: 2550,
      upper_bound: 2560,
      allocation_percentage: 18.8,
    },
    {
      bin_number: 256,
      lower_bound: 2560,
      upper_bound: 2570,
      allocation_percentage: 9.04,
    },
    {
      bin_number: 257,
      lower_bound: 2570,
      upper_bound: 2580,
      allocation_percentage: 18.8,
    },
    {
      bin_number: 258,
      lower_bound: 2580,
      upper_bound: 2590,
      allocation_percentage: 11.08,
    },
    {
      bin_number: 259,
      lower_bound: 2590,
      upper_bound: 2600,
      allocation_percentage: 7.75,
    },
    {
      bin_number: 260,
      lower_bound: 2600,
      upper_bound: 2610,
      allocation_percentage: 4.99,
    },
    {
      bin_number: 261,
      lower_bound: 2610,
      upper_bound: 2620,
      allocation_percentage: 2.86,
    },
  ]);

  // useEffect(() => {
  //   const getAllocationData = async () => {
  //     const response = await getAllocation();

  //     setFormData(response);
  //   };
  //   getAllocationData();
  // }, []);
  const mid = Math.ceil(formData.length / 2);
  const left = formData.slice(0, mid);
  const right = formData.slice(mid);

  return (
    <Stack
      sx={{ color: "#ffffff" }}
      bgcolor="#1e1e1e"
      borderRadius={4}
      paddingX={2}
      paddingY={3}
    >
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          fullWidth
          // color="info"
          variant="outlined"
          label="Deposit Amount"
          onChange={(e) => setDepositAmount(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff",
              },
              "&:hover fieldset": {
                borderColor: "#ffffff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffffff",
              },
              "& input": {
                color: "#ffffff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#ffffff",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#ffffff",
            },
          }}
        />
        <Button variant="contained">Deposit</Button>
      </Stack>
    <Stack direction="row" spacing={4} mt={2}>
      {[left, right].map((column, i) => (
        <Stack key={i} flex={1} spacing={1}>
          {column.map((item: any) => (
            <Stack
              key={item.bin_number}
              direction="row"
              justifyContent="space-between"
              sx={{
                p: 2,
                borderRadius: 1,
                backgroundColor: "#111827",
                "&:hover": { backgroundColor: "#1f2937" },
              }}
            >
              <Typography fontWeight={500}>
                Price range:{" "}
                <b>
                  {item.lower_bound} - {item.upper_bound}
                </b>
              </Typography>
              <Typography fontWeight={600} color="#10b981">
                {item.allocation_percentage}%
              </Typography>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
    </Stack>
  );
};

export default FormSection;
