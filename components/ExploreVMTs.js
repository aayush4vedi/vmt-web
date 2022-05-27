import { SettingsIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Image,
  Box,
  Link,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Skeleton
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useApiContract } from "react-moralis";
import { arboristAbi } from "../constants/abi";
import { arboristAddress } from "../constants/addresses";
import TableHeader from "./TableHeader";
import TreeEntry from "./TreeEntry";

// const ExploreVMTs = (props) => {

//   // treats arborist contract as backend database
//   const getVMTreesOptions = {
//     chain: "rinkeby",
//     address: arboristAddress,
//     functionName: "getVMTrees",
//     abi: arboristAbi,
//     params: {},
//   };
//   // useApiContract connects to moralis provider without needing user's wallet
//   // to be connected
//   const {
//     runContractFunction,
//     data,
//     error,
//     isLoading,
//     isFetching,
//   } = useApiContract(getVMTreesOptions);
//   // get the tree data when the page loads
//   useEffect(() => {
//     runContractFunction();

//     console.log("[ExploreVMTs] ........................>>");
//     console.log(
//       "........................ appId: ",
//       process.env.NEXT_PUBLIC_APP_ID
//     );
//     console.log(
//       "........................ serverUrl: ",
//       process.env.NEXT_PUBLIC_SERVER_URL
//     );
//     console.log("........................ data: ", data);
//     console.log(
//       "........................ getVMTreesOptions: ",
//       getVMTreesOptions
//     );

//   },[]);    // eslint-disable-line react-hooks/exhaustive-deps

//   if(!data){
//     return (
//       <Box paddingLeft="7%" paddingRight="7%">
//       <Flex>
//         <Text fontSize="xl" ml="2em" fontWeight="bold">
//           Explore VMTs
//         </Text>
//       </Flex>

//       <Box>
//         <Flex
//           pl="5em"
//           pr="5em"
//           fontSize="xx-small"
//           minWidth="max-content"
//           alignItems="center"
//           gap="2"
//         >
//           <Flex>
//             <Box w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//           </Flex>
//           <Flex>
//             <GridItem w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//           </Flex>
//         </Flex>
//         <TableHeader/>
//         <Box pt={10}>
//         <Stack ml="2em" mr="2em">
//           <Skeleton height='50px' borderRadius={155}/>
//           <Skeleton height='50px' borderRadius={155}/>
//           <Skeleton height='50px' borderRadius={155}/>
//           <Skeleton height='50px' borderRadius={155}/>
//           <Skeleton height='50px' borderRadius={155}/>
//           <Skeleton height='50px' borderRadius={155}/>
//         </Stack>
//         </Box>
//       </Box>
//     </Box>
//     )
//   }

//   return (
//     <Box paddingLeft="7%" paddingRight="7%">
//       <Flex>
//         <Text fontSize="xl" ml="2em" fontWeight="bold">
//           Explore VMTs
//         </Text>
//       </Flex>

//       <Box>
//         <Flex
//           pl="5em"
//           pr="5em"
//           fontSize="xx-small"
//           minWidth="max-content"
//           alignItems="center"
//           gap="2"
//         >
//           <Flex>
//             <Box w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//           </Flex>
//           <Flex>
//             <GridItem w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//             <GridItem w="100%" h="10" bg="blue.500" />
//           </Flex>
//         </Flex>
//         {/* <Button onClick={runContractFunction()} /> */}
//         <TableHeader />
//         <Box>
//           {data &&
//             data[1].map((vmtree, index) => {
//               // The struct returns data in an array!
//               //   struct VMTreeData {
//               //     string name;
//               //     bool isActive;
//               //     address contractAddress;
//               //     address controller;
//               //     address linkPayer;
//               //   }
//               return <TreeEntry myTrees={data[1]} key={data[1]} />;
//             })}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

const ExploreVMTs = (props) => {

  // treats arborist contract as backend database
  const getVMTreesOptions = {
    chain: "rinkeby",
    address: arboristAddress,
    functionName: "getVMTrees",
    abi: arboristAbi,
    params: {},
  };
  // useApiContract connects to moralis provider without needing user's wallet
  // to be connected
  const {
    runContractFunction,
    data,
    error,
    isLoading,
    isFetching,
  } = useApiContract(getVMTreesOptions);
  // get the tree data when the page loads
  useEffect(() => {
    runContractFunction()
  }, []);     // eslint-disable-line react-hooks/exhaustive-deps

  if(!data) {
    return (
      <Box paddingLeft="7%" paddingRight="7%">
        <Flex>
          <Text fontSize="xl" ml="2em" fontWeight="bold">
            Explore VMTs
          </Text>
        </Flex>
      
      <Flex justifyContent="center" alignItems="center">
          <Button
            variant="solid"
            size="sm"
            borderRadius={155}
            p={5}
            pl={50}
            pr={50}
            colorScheme="facebook"
            m={5}
            onClick={() => runContractFunction()}
            rightIcon={<ChevronDownIcon />}
            bgColor="#365AD2"
            color="#fff"
            _hover={{
              background: "#fff",
              borderColor: "#365AD2",
              color: "#365AD2",
              borderWidth: "1.5px",
            }}
            zIndex="0"
          >
            See All Trees
          </Button>
        </Flex>
      </Box>
    )
  }

  return (
    <Box paddingLeft="7%" paddingRight="7%">
      <Flex>
        <Text fontSize="xl" ml="2em" fontWeight="bold">
          Explore VMTs
        </Text>
      </Flex>

      <Box>
        {/* Header row */}
        <Flex
          pl="5em"
          pr="5em"
          fontSize="xx-small"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Flex>
            <Box w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Flex>
          <Flex>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Flex>
        </Flex>
        <SimpleGrid
          columns={25}
          spacing={0.5}
          fontSize="xx-small"
          color="gray.400"
        >
          <Text bg="#fff"></Text>
          <Text bg="#fff">STATUS</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff">ADDRESS</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff">NAME</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff">BALANCE</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff">USAGE</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff">CREATED</Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
          <Text bg="#fff"></Text>
        </SimpleGrid>

        <Box>
          {data &&
            data[1].map((vmtree, index) => {
              // The struct returns data in an array!
              //   struct VMTreeData {
              //     string name;
              //     bool isActive;
              //     address contractAddress;
              //     address controller;
              //     address linkPayer;
              //   }
              return (
                <Flex
                  justifyContent="space-between"
                  backgroundColor="#fff"
                  borderRadius={155}
                  boxShadow="md"
                  padding="1em"
                  pl="5em"
                  pr="5em"
                  fontSize="smaller"
                  color="gray.600"
                  margin="1em"
                  key={vmtree[2]}
                >
                  <Text>
                    {vmtree[1] ? (
                      <Image src="enabled_vmt.svg" alt="enabled" />
                    ) : (
                      <Image src="disabled_vmt.svg" alt="disabled" />
                    )}
                  </Text>
                  <Text>{/* name */ vmtree[0]}</Text>
                  <Text>{/* contractAddress */ vmtree[2]}</Text>
                  <Text>{/* controller */ vmtree[3]}</Text>
                  <Text>{/* linkPayer */ vmtree[4]}</Text>
                  <Text isNumeric>{/* linkPayerBalance */}</Text>
                  <Text>
                    <Link href="#">
                      <SettingsIcon />
                    </Link>
                  </Text>
                </Flex>
              );
            })}
        </Box>
        
      </Box>
    </Box>
  );
};

export default ExploreVMTs;
