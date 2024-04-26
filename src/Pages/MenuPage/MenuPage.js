import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, ButtonGroup, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey, orange } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../../redux/slices/TableSlice";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  width: 10,
  height: 30,
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[800],
  borderColor: orange[600],
  "&:hover": {
    backgroundColor: orange[100],
    borderColor: orange[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: orange[600],
    },
    "&:hover fieldset": {
      borderColor: orange[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: orange[500],
    },
    "& input": {
      textAlign: "center",
      width: 10,
      height: 12.5,
      color: orange[700],
    },
  },
});

function MenuPage() {
  const { rows } = useSelector((state) => state.TableSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const [order, setOrder] = useState([]);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const promos = [
    { name: "batot10", discount: 10 },
    { name: "batot20", discount: 20 },
    { name: "batot30", discount: 30 },
  ];

  const cardsData = [
    {
      title: "Burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua. Ut enim ad minim veniam, ut aliquip ex ea commodo consequat.",
      image: "https://www.recipetineats.com/wp-content/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg",
      price: 100,
    },
    {
      title: "Pizza",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua. Ut enim ad minim veniam, ut aliquip ex ea commodo consequat.",
      image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      price: 140,
    },
    {
      title: "Negresko",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua. Ut enim ad minim veniam, ut aliquip ex ea commodo consequat.",
      image: "https://www.storia-eg.com/images/items/2692.jpg",
      price: 130,
    },
  ];
  console.log(order)

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="menu__section">
          <div className="left__side">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#F46700" }}
                onClick={() => console.log("gg")}
              >
                + Add new
              </Button>
            </div>
            <div className="cards">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  sx={{ maxWidth: 345, borderRadius: "10px", width: "32%" }}
                >
                  <CardMedia
                    component="img"
                    alt="card image"
                    height="140"
                    image={card.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {card.price}
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      style={{ backgroundColor: "#F46700" }}
                      onClick={() => {
                        console.log(order);
                        const orderData = [
                          ...order,
                          { title: card.title, price: card.price, quantity: 1 , image: card.image},
                        ];
                        setOrder(orderData);
                      }}
                    >
                      Order
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="right__side">
            <h2>Current Order</h2>
            <div style={{ marginTop: "40px" }}>
              {order.map((theOrder, index) => (
                <Card
                  key={index}
                  sx={{ display: "flex", marginBottom: "25px" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 90 }}
                    image={theOrder.image}
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div">{theOrder.title}</Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {theOrder.title}
                      </Typography>
                    </CardContent>
                    <Box sx={{ pl: 2, pb: 1, display: "flex" }}>
                      <Typography
                        variant="subtitle2"
                        style={{ fontWeight: 800 }}
                      >
                        Price:{" "}
                        {parseInt(theOrder.price) * parseInt(theOrder.quantity)}
                        $
                      </Typography>
                      <div className="increase__dicrease">
                        <Container>
                          <ButtonGroup>
                            <StyledButton
                            >
                              -
                            </StyledButton>
                            <StyledInput
                              size="small"
                              value={theOrder.quantity}
                            />
                            <StyledButton
                              onClick={() => {
                                setOrder((orderr) => {
                                  return orderr.map((item) =>
                                    // console.log(order)
                                    item.title === theOrder.title
                                      ? { ...item, quantity: item.quantity + 1 }
                                      : item
                                  );
                                });
                              }}
                            >
                              +
                            </StyledButton>
                          </ButtonGroup>
                        </Container>
                      </div>
                    </Box>
                  </Box>
                </Card>
              ))}
            </div>
            <div className="promo__code">
              <h2>Add Promo Code</h2>
              <input onChange={(e) => setPromo(e.target.value)} />
              <Button
                variant="contained"
                style={{ backgroundColor: "#F46700" , marginBottom: "2px"}}
                onClick={() => {
                  const thePromo = promos.find((prom) => prom.name === promo);
                  if (thePromo) {
                    setDiscount(thePromo.discount);
                  }
                }}
              >
                Done
              </Button>
            </div>
            <div className="price__card">
              <div className="total__price">
                <div className="left__title">
                  <h4>Price before:</h4>
                  <h4>discount:</h4>
                </div>
                <div className="right__title">
                  <h4>
                    {order.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                    $
                  </h4>
                  <h4>
                    {discount
                      ? (order.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        ) *
                          discount) /
                        100
                      : 0}
                    $
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px dotted gray",
                  paddingTop: "30px",
                  marginTop: "50px",
                }}
              >
                <h2>Total:</h2>
                <h2>
                  {discount
                    ? order.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0 -
                          (order.reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          ) *
                            discount) /
                            100
                      )
                    : order.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                  $
                </h2>
              </div>
              <div
              style={{
                marginTop: "50px",
                
              }}
              >
                <Button
                  onClick={() => {
                    dispatch(
                      addMenu({
                        id: id,
                        order: order,
                        price: discount
                          ? order.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0
                            ) -
                            (order.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0
                            ) *
                              discount) /
                              100
                          : order.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0
                            ),
                      })
                    );
                    navigate("/");
                  }}
                  variant="contained"
                  style={{ backgroundColor: "#F46700", width: "100%" , marginBottom: "20px"}}
                >
                  Confirm Order
                </Button>
                <Button
                  variant="outlined"
                  style={{ width: "100%" }}
                  sx={{
                    borderColor: "#F46700",
                    color: "rgb(244, 103, 0)",
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "rgb(244 103 0 / 9%)",
                      borderColor: "#F46700",
                    },
                  }}
                  onClick={()=> window.print()}
                >
                  Print receipt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
