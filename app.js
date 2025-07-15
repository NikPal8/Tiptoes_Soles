const shoes = [
    {
        id: "gary",
        color: ["tan", "midnight"],
        img: [`images/Gary_Tan.jpg`, `images/Gary_Black.jpg`],
        price: 79,
        size: [6, 7, 8, 9, 10, 11],
        desc: ["Look good, feel great in these comfort sneakers you won't want to take off. ", "Soft leather uppers", "Breathable mesh lining", "Removable footbed with soft mesh sock lining", "Contoured footbed with additional heel padding", "Orthotic friendly"],
        details: ["Product Code: 30213", "Sole Material: Rubber", "Sock Material: Synthetic", "Lining Material: Eco friendly", "Upper Material: Leather"]
        
    },
    {
        id: "workAndWalk",
        color: "chesnut",
        img: `images/Work_and_Walk_Chesnut.jpg`,
        price: 85,
        size: [6, 7, 8, 9, 10, 11],
        desc: ["Hiking-inspired with everyday style, meet the Work and Walk boot. With leather upper, these lace-up ankle boots are built for long days on your feet. The exterior features our No-Worry leather to protect from scuff, stain and water. Plus, the inside is pretty comfy as well with a soft footbed that hugs your heel for extra support.", "Upper is scuff, stain & water-resistant", "Breathable & soft foam backed mesh lining", "Padded collar is super soft on the heel", "Pull-tab for easy fitting", "Metal eyelet detail", "Footbed hugs your heel for extra support", "Removable insole to fit your own orthotics", "Dual Fit. Remove the insole for a wider fit"],
        details: ["Product Code: 30144", "Sole Material: Rubber", "Sock Material: Pigskin", "Lining Material: Mesh", "Upper Material: Leather" ]
    },
        {
        id: "sally",
        color: ["tan", "black"],
        img: [`images/Sally_Tan.jpg`, `images/Sally_Black.jpg`],
        price: 75,
        size: [6, 7,8 ,9 ,10 ,11 ],
        desc: ["Sally our new favourite lightweight flat is giving our serious comfort goals, with it's soft semi line uppers and padded arch support.", "Soft smooth leather uppers", "Semi lined uppers for a soft unstructured feel", "Super comfortable insole & padded arch support", "Super lightweight outsole helps to absorb shock", "Flexible & grippy outsole"],
        details: ["Product Code: 301818", "Sole Material: Phylon rubber", "Sock Material: Pigskin",  "Lining Material: Leather/synthetic", "Upper Material: Leather"]
    },
        {
        id: "heavenly",
        color: "black",
        img: `images/Heavenly_Black.jpg`,
        price: 90,
        size: [6, 7, 8, 9, 10, 11],
        desc: ["Perfect for those on their feet all day who require leather uppers for easy cleaning. Featuring a super flexible and grippy outsole for durability and a soft padded footbed for extra comfort", "Soft leather uppers and lightly padded collar", "Plush footbed for added comfort", "Recycled heel grip", "Flexible and grippy outsole with 10% recycled material" ],
        details: ["Product Code: 21960", "Sole Material: Rubber", "Sock Material: Pigskin", "Lining Material: Unlined", "Upper Material: Leather"]
    },
        {
        id: "clancy",
        color: "blue",
        img: `images/Clancy_Blue.jpg`,
        price: 59,
        size: [6, 7, 8, 9, 10, 11],
        desc: ["The Clancy sandal allows air circulation due to the holes on each side. These sandals provide support to tired feet. The arch support design eliminates any strain or imbalance.  Stretchable mesh fabric allows an easy fit Memory foam insoles"],
        details: ["Product Code: 30182", "Sole Material: Rubber", "Sock Material: Pigskin", "Lining Material: Unlined", "Upper Material: Leather"]
    }

];

console.log(shoes[0].size[1]);// 7


const shoePages = [
    `<aside></aside>

                <div id="productPanel">

                    <section class ="shoeItemDisplay">
                        <ul class="shoeStats">
                            <li>Gary Tan</li>
                            <li><img src="../images/Gary_Tan.jpg" alt="Gary Tan Shoe"></li>
                            <li class ="shoeItemPrice"><span id="shoePrice">$79.00</span></li>
                            <li class ="shoeItemCart">
                                <button>Add to Cart</button>
                                <button id="favButton">
                                    <span id="plus">+</span>
                                    <span id="heartSymbol">&#9825</span>
                                </button></li>
                        </ul>
                    </section>

                    <section class = "shoeItemDetails">
                        <!-- <p class ="shoeItemDescription">
                            Look good, feel great in these comfort sneakers you won't want to take off. 
                        </p> -->

                        <ul class = "shoeItemFeatures">
                            <li id="shoeParagraph">Look good, feel great in these comfort sneakers you won't want to take off.</li>
                            <li>Soft leather uppers</li>
                            <li>Breathable mesh lining</li>
                            <li>Contoured footbed with additional heel padding</li>
                            <li>Orthotic friendly</li>
                        </ul>
                        

                        <ul class = "shoeItemMaterials">
                            <li id="subHeading"><h2>Materials & Details:</h2></li>
                            <li>Product Code: 30213</li>
                            <li>Sole Material: Rubber</li>
                            <li>Lining Material: Eco friendly</li>
                            <li>Upper Material: Leather</li>
                        </ul>
                    </section>

                </div>
            <aside></aside>`
];
