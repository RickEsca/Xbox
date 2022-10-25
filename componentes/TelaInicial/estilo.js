import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2c2e2d1',
    padding: 15,
    
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: '#87CEEB',
    marginBottom: 5,
  },
  desc: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000000	',
    marginBottom: 2,
  },
  btn: {
    width:250,
    height: 150,
    justifyContent:"center",
    backgroundColor:"#87CEEB",
    borderRadius: 20,
  },
})

export default estilos;