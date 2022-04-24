import { Box, Button, FormControl,  Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Purchased =()=>{
    // react hooks form
    const {register, handleSubmit} = useForm()
    const onSubmit =(data)=>{
        console.log(data);
    }
    return(
           <Box border="1px" m={"10"}p="10" width={"80"} borderRadius="15">
               <Heading fontSize={"2xl"} mb="4">Item to Purchase</Heading>
               <form onSubmit={handleSubmit(onSubmit)}>
           <FormControl>
            <Select variant={"filled"} mb="4" {...register("name")}>
                <option value={"none"} selected disabled>Available Items</option>
                <option value={"Coke"}>Coke</option>
                <option value={"Pepsi"} >Pepsi</option>
                <option value={"Dew"}>Dew</option>
            </Select>
            {/* for Quantity section */}
            <NumberInput min={1} max={10} mb="4">
            <NumberInputField  placeholder="Quantity" {...register("quantity")} />
            <NumberInputStepper>
                <NumberIncrementStepper/>
                <NumberDecrementStepper/>
            </NumberInputStepper>
            </NumberInput>
             {/* for amoutn section */}
             <NumberInput min={20} max={1000} mb="4">
                <NumberInputField placeholder="Amount" {...register("price")} />
                <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
                <Button type="submit" colorScheme={"messenger"}>Purchase</Button>
            </FormControl>
            </form>
           </Box>
       
    )
}

export default Purchased