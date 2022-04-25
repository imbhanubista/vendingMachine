import { Box, Center, Text, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Refund = () => {
  // navigation to go home
  const subNav = useNavigate();
  const goNav = useNavigate();
  const homeNav = () => {
    goNav("/");
  };

  // to get the refcode using react hooks form
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const refApi = await axios({
      method: "post",
      url: "http://localhost:4000/refund",
      data: data,
    });
    if (refApi.data.type === "error") {
      toast.error(refApi.data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(refApi.data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      subNav("/");
    }

    console.log(refApi.data);
  };

  return (
    <div>
      <Center>
        <Box p="4" m="8" borderRadius={"15"} shadow="lg" width={"80"}>
          <Center mb={"1"}>
            <Text fontSize={"3xl"} color="twitter.700" fontWeight={"bold"}>
              Refund
            </Text>
          </Center>
          <Center mb={"4"}>
            {" "}
            <Text>Enter purchase Token</Text>
          </Center>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center mb="4">
              <Input
                placeholder="Enter purchase Token"
                textAlign={"center"}
                variant="filled"
                {...register("refCode")}
              />
            </Center>
            <Center>
              <Button
                size={"sm"}
                colorScheme="messenger"
                mb={"4"}
                type="submit"
              >
                Refund
              </Button>
            </Center>
          </form>
          <Center>
            <Button
              variant="link"
              textColor={"blue"}
              size="xs"
              onClick={homeNav}
            >
              Back Home
            </Button>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Refund;
