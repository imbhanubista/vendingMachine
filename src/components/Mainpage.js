import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Navbar from "../assets/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mainpage = () => {
  // to make sure that the box is clicked
  const [clicked, setClicked] = useState("");
  // state to make sure items are loading
  const [loading, setLoading] = useState(true);
  // state to save the data
  const [items, setItems] = useState([]);
  const getApiData = async () => {
    let apiCalling = await axios({
      method: "get",
      url: "http://localhost:4000/getall",
    });
    // console.log(apiCalling.data)
    setItems(apiCalling.data.data);
    setLoading(false);
  };
  console.log(items);
  useEffect(() => {
    getApiData();
  }, []);

  // function to handle box
  const boxHandle = (data) => {
    setClicked(data);
  };
  // react hooks form
  const { register, handleSubmit } = useForm();
  const onSubmit = async (purchaseData) => {
    let purchaseApi = await axios({
      method: "post",
      url: "http://localhost:4000/purchase",
      data: {
        cash: parseInt(purchaseData.price),
        quantity: parseInt(purchaseData.quantity),
        items: clicked,
      },
    });
    if (purchaseApi.data.type === "error") {
      toast.error(purchaseApi.data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(
        `${purchaseApi.data.msg}. Your Ref. code : ${purchaseApi.data.data.refCode}. Return Amount : ${purchaseApi.data.data.returnCash}. Ordered items: ${purchaseApi.data.data.quantity}.Purchased items: ${purchaseApi.data.data.purchasedQuantity}`,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 8000,
        }
      );
      getApiData();
      setClicked("");
    }
    console.log(purchaseApi.data);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        "Data is loading..."
      ) : (
        <SimpleGrid columns={3} spacing="6" mt={4} m="10">
          {items.map((data, index) => {
            return (
              <Box
                border={
                  clicked === data.name ? "1px solid green" : "AppWorkspace"
                }
                m="6"
                p={4}
                shadow={"lg"}
                borderRadius="10"
                onClick={() => boxHandle(data.name)}
                cursor="pointer"
              >
                <Text fontSize={"25"}>
                  {" "}
                  Product Name:<em>{data.name}</em>{" "}
                </Text>
                <Text mt={2}>Quantity: {data.quantity}</Text>
                <Text mt={2}>Price: {data.price}</Text>
              </Box>
            );
          })}
          {clicked === "" ? (
            ""
          ) : (
            <Box border="1px" m={"10"} p="10" width={"80"} borderRadius="15">
              <Heading fontSize={"2xl"} mb="4">
                Item to Purchase
              </Heading>

              <Divider />
              {/* form section here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Heading fontSize={"3xl"} mb="4" mt={"2"} color="#50B062">
                    {" "}
                    {clicked}{" "}
                  </Heading>
                  {/* for Quantity section */}
                  <NumberInput min={1} max={10} mb="4">
                    <NumberInputField
                      type={"number"}
                      placeholder="Quantity"
                      {...register("quantity")}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {/* for amoutn section */}
                  <NumberInput min={5} max={1000} mb="4">
                    <NumberInputField
                      type={"number"}
                      placeholder="Amount"
                      {...register("price")}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button type="submit" colorScheme={"messenger"}>
                    Purchase
                  </Button>
                </FormControl>
              </form>
            </Box>
          )}
        </SimpleGrid>
      )}
    </div>
  );
};

export default Mainpage;
