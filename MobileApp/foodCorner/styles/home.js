import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#462B9C",
    flexDirection: "column",
    padding: 5,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "cover",
  },
  text: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    borderRadius: 20,
    padding: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  topView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  profileImage: {
    width: 35,
    height: 35,
    resizeMode: "cover",
    borderRadius: 15,
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  input: {
    padding: 5,
    backgroundColor: "#D3D0D0",
    color: "#333",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "90%",
    fontSize: 20,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: "contain",
  },
  promotionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#9577F2",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  popularContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  food: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#EBE8E8",
    padding: 20,
    borderRadius: 20,
  },
});

export default styles;