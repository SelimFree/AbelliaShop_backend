const generateHTMLForm = (data) => {
  let items = "";
  let total = 0;

  data?.products?.map((product) => {
    items += `<span style="margin-bottom: 20px;">${product.title}<br><span style="margin-left: 10px; font-size: 10px; color: #717173;">${product.quantity} x ${product.price}.00 TMT = ${product.price * product.quantity}.00 TMT</span> </span><br>`;
    total += product.price * product.quantity;
  });

  return `
  <html>
    <head></head>
    <body
        style="max-width: 500px; width: 100%; margin: auto; padding-top: 11px"
    >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap"
            rel="stylesheet"
        />
        <table
            class="table-container"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="width: 500; margin: auto"
        >
            <tbody>
                <tr>
                    <td
                        class="container"
                        width="100%"
                        style="
                            width: 100%;
                            margin: 0px;
                            font-family: 'Nunito', sans-serif;
                            border: 1px solid #eeeeee;
                            border-radius: 7px;
                        "
                    >
                        <!-- TOP CONTAINER -->
                        <table
                            class="top-container"
                            style="
                                width: 100%;
                                max-height: 188px;
                                padding: 44px 33px 20px 33px;
                                margin-bottom: 22px;
                                background: #000;
                                color: white;
                                font-size: 22px;
                                font-weight: 400;
                                position: relative;
                                border-radius: 7px 7px 0px 0px;
                            "
                        >
                            <tbody>
                                <tr class="top-container__info">
                                    <td class="top-container__section">
                                        <img
                                            class="wolt-logo"

                                            style="
                                                height: 150px;
                                                margin-bottom: 7px;
                                            "
                                            src="https://abelliashopadmin.onrender.com/uploads/logo_5e3134370e.png"
                                        />
                                        <p
                                            class="top-container__greetings"
                                            style="
                                                font-weight: 900;
                                                max-width: 222px;
                                                font-size: 20px;
                                                margin: 0px;
                                                color: #ffffff;
                                            "
                                        >
                                            Спасибо за ваш заказ<br />${data.name}!
                                        </p>
                                    </td>
                                    <td
                                        class="top-container__image"
                                        style="
                                            position: absolute;
                                            max-width: 255px !important;
                                            min-height: 77px;
                                            max-height: 120px;
                                            right: 24px;
                                            bottom: -11px;
                                        "
                                    >
                                        <img
                                            class="shopping-bag-image"
                                            height="133"
                                            style="
                                                max-height: 144px !important;
                                                height: 22vw;
                                                min-height: 77px !important;
                                                max-width: 255px !important;
                                                padding: 0px;
                                                margin: 0px;
                                            "
                                            src="https://abelliashopadmin.onrender.com/uploads/cosmetics_acd70e2af4.png"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            class="receipt__info"
                            style="width: 100%; padding-bottom: 20px"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            class="receipt__info"
                                            style="
                                                width: 100%;
                                                padding: 11px 40px;
                                            "
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p
                                                            class="receipt__info-text"
                                                            style="
                                                                margin: 0;
                                                                font-size: 11px;
                                                                font-weight: 400;
                                                                padding-bottom: 2px;
                                                                color: #717173;
                                                            "
                                                        >
                                                            Список товаров:
                                                        </p>
                                                        <p
                                                            class="receipt__info-text-venue"
                                                            style="

                                                                font-size: 14px;
                                                                font-weight: 550;
                                                            "
                                                        >
                                                        ${items}
                                                        </p>
                                                        <p
                                                            class="receipt__info-text-date-ref"
                                                            style="
                                                                margin: 10px 0;
                                                                font-size: 13px;
                                                                font-weight: 400;
                                                            "
                                                        >
                                                            Дата заказа: ${data.createdAt} <br />
                                                        </p>
                                                        <p
                                                            class="receipt__info-text-date-ref"
                                                            style="
                                                                margin: 0;
                                                                font-size: 13px;
                                                                font-weight: 400;
                                                                padding-bottom: 11px;
                                                                border-bottom: 1px
                                                                    solid
                                                                    #eeeeee;
                                                            "
                                                        >
                                                            Номер заказа: ${data.id}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            class="receipt"
                                            width="100%"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            style="
                                                width: 100%;
                                                padding: 0px 40px;
                                                font-family: 'SF Pro Text',
                                                    sans-serif;
                                                line-height: 20px;
                                                color: #000000;
                                            "
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            role="presentation"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                            border="0"
                                                            width="100%"
                                                            height="26"
                                                            vertical-align="middle"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        vertical-align="middle"
                                                                        width="50%"
                                                                        height="26"
                                                                        align="left"
                                                                        class="receipt__total-bold"
                                                                        style="
                                                                            font-size: 14px;
                                                                            font-weight: 700;
                                                                        "
                                                                    >
                                                                        ИТОГО
                                                                    </td>
                                                                    <!-- RIGHT COLUMN -->
                                                                    <td
                                                                        height="26"
                                                                        vertical-align="middle"
                                                                        width="50%"
                                                                        align="right"
                                                                        class="receipt__total-right"
                                                                        style="
                                                                            font-size: 14px;
                                                                            font-weight: 700;
                                                                            text-align: right;
                                                                        "
                                                                    >
                                                                        <span>${total}.00 TMT</span
                                                                        >
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="width: 100%"
                            width="100%"
                        >
                            <tbody>
                                <tr>
                                    <td
                                        class="bottom-container"
                                        style="
                                            width: 100%;
                                            text-align: justify;
                                            text-justify: inter-word;
                                            background: #f7f7f7;
                                            padding: 40px;
                                            color: #717173;
                                            font-size: 11px;
                                            font-weight: 400;
                                            border-radius: 0 0 7px 7px;
                                        "
                                    >
                                        По всем вопросам обращайтесь в наш магазин
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
`;
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        from: "dev3.aksahypa@gmail.com",
        to: result.email,
        cc: ["selim.altayev@gmail.com"],
        subject: `Номер вашего заказа: ${result.id}`,
        html: generateHTMLForm(result),
      });
    } catch (err) {
      console.log(err);
    }
  },
};
