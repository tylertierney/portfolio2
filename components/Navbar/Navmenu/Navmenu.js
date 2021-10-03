import { Flex } from "@chakra-ui/react";

const Navmenu = ({ handleScroll, isNavmenuShowing }) => {
  const menuItems = ["Projects", "Experience", "Contact"];

  let animation = "";

  if (isNavmenuShowing) {
    animation = "slidein";
  } else {
    animation = "slideaway";
  }

  return (
    <Flex
      animation={`${animation} 0.3s ease-in-out forwards`}
      color="brand.text.dark"
      h="100%"
      w="90%"
      justify="space-around"
    >
      {menuItems.map((item, index) => {
        return (
          <Flex
            transition="0.4s ease-in-out"
            fontSize={["0.8rem", "0.9rem", "1rem"]}
            paddingX={["0.2rem", "0.8rem", "1.2rem"]}
            cursor="pointer"
            _hover={{
              // backgroundColor: "brand.gray",
              color: "brand.primary.1000",
            }}
            justify="center"
            align="center"
            onClick={() => handleScroll("about")}
            key={index}
          >
            {item}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Navmenu;
