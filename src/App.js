import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./Card.css";
import "./App.css";

const App = () => {
  const handleButtonClick = () => {
    alert("Welcome to the world of guitars! 🎸🎸🎸");
  };

  return (
    <div className="app-container">
      <h1>Checkout the latest collection!!</h1>
      <div className="card-container">
        <Card
          title="Guitar"
          description="Price: 1000"
          image="https://m.media-amazon.com/images/I/81rEbqDbPUL._SY355_.jpg"
        />

        <Card
          title="Guitar"
          description="Price: 1900"
          image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6_ylBFfyNYhgEJpEGxTTqeSFQm_UQdMcI_H_ib4Di31F9XQxWwgA192iiWj6Zov8zAdiogKoLwfsAv1SFIOAiMuhfgLPRMdA_JYcyWSxQKjIdD0iTkELI&usqp=CAE"
        />
        <Card
          title="Guitar"
          description="Price: 1500"
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLzC3ASH_MhDM8eINEvRl3cHwv0ygmYsH5Vg5TBOL7R1kfzOyHQHUA5Nnzzg_86FqKSGljbQTMoAYeOtKSUhwaxTEr58ZNMviULOkT7ebgjkghTYYI2l3-&usqp=CAE"
        />
        <Card
          title="Guitar"
          description="Price: 4000"
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTNDhRHunmtrrIr7cUL03vvJRHpmZO5YqImMaeiYdd7yH7JyMJ5pUMIAplnuXQed6h4vwpVYj5phHHGoXyL2L9WP6xdMguy4pHle2g7jc5eGSeqKn_3Rbx&usqp=CAE"
        />

        <Card
          title="Guitar"
          description="Price: 1000"
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/acoustic-guitar/0/e/g/38-matt-medellin-original-imagtsc4bgq2gw3z.jpeg?q=70&crop=false"
        />

        <Card
          title="Guitar"
          description="Price: 2000"
          image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_9mzE8nU5fyXkaGsI3jMHEp15tJztIgqXLBGSN18o9As09oYMh9Q6BnZDm150ud79bj8EpFKsJpdFcUZLq0hnbKEQPNEUEWuWKyR_V-gAgZFglkKCr7ba&usqp=CAE"
        />
        <Card
          title="Guitar"
          description="Price: 1500"
          image="https://m.media-amazon.com/images/I/31UJsVvsX6L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Card
          title="Guitar"
          description="Price: 4000"
          image="https://m.media-amazon.com/images/I/31mP2xqhAnL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Card
          title="Guitar"
          description="Price: 4500"
          image="https://m.media-amazon.com/images/I/51U3eBuWl+L._SY300_SX300_.jpg"
        />
        <Card
          title="Guitar"
          description="Price: 2000"
          image="https://m.media-amazon.com/images/I/41ChiOfqWpL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

      <Button onClick={handleButtonClick} text="Wishlist" />
    </div>
  );
};

export default App;
