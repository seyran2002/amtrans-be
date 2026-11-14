import { OrderStatus } from '../../generated/prisma';

export interface TelegramInlineKeyboardButton {
  text: string;
  url: string;
}

export interface TelegramInlineKeyboardMarkup {
  inline_keyboard: TelegramInlineKeyboardButton[][];
}

export const TELEGRAM_ORDER_BUTTON_LABELS = {
  hy: 'Տեսնել պատվերը',
  en: 'View Order',
  ru: 'Просмотреть заказ',
} as const;

export function getOrderInlineKeyboard(
  orderUrl: string,
  language?: 'hy' | 'en' | 'ru' | string,
): TelegramInlineKeyboardMarkup {
  const normalized = language?.toLowerCase();
  if (normalized === 'hy' || normalized === 'am' || normalized === 'armenian') {
    return {
      inline_keyboard: [[{ text: TELEGRAM_ORDER_BUTTON_LABELS.hy, url: orderUrl }]],
    };
  }
  if (normalized === 'en' || normalized === 'english') {
    return {
      inline_keyboard: [[{ text: TELEGRAM_ORDER_BUTTON_LABELS.en, url: orderUrl }]],
    };
  }
  if (normalized === 'ru' || normalized === 'russian') {
    return {
      inline_keyboard: [[{ text: TELEGRAM_ORDER_BUTTON_LABELS.ru, url: orderUrl }]],
    };
  }

  return {
    inline_keyboard: [
      [
        { text: TELEGRAM_ORDER_BUTTON_LABELS.hy, url: orderUrl },
        { text: TELEGRAM_ORDER_BUTTON_LABELS.en, url: orderUrl },
        { text: TELEGRAM_ORDER_BUTTON_LABELS.ru, url: orderUrl },
      ],
    ],
  };
}

export const getTelegramOrderInlineKeyboard = getOrderInlineKeyboard;

export interface TelegramOrderNotificationParams {
  trackingNumber: string;
  fromOffice: string;
  orderUrl: string;
  language?: string;
}

export function getPendingEstimateTelegramTemplate(params: TelegramOrderNotificationParams): string {
  const { trackingNumber, fromOffice, orderUrl } = params;

  return `Հայերեն

📦 Նոր պատվեր․ անհրաժեշտ է գնահատել առաքման արժեքը

Հաճախորդը գրանցել է նոր պատվեր, որի համար առաքման սակագին առկա չէ։

Խնդրում ենք ստուգել պատվերի տվյալները և առաջարկել առաքման արժեքը։

Պատվերի համար՝ ${trackingNumber}

Ուղարկման գրասենյակ՝ ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.hy}](${orderUrl})

English

📦 New Order: Shipping Price Estimate Required

A customer has created a new order, but no shipping tariff is available for this route.

Please review the order details and submit a proposed shipping price.

Tracking number: ${trackingNumber}

Origin office: ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.en}](${orderUrl})

Русский

📦 Новый заказ: требуется оценка стоимости доставки

Клиент создал новый заказ, но для данного маршрута отсутствует тариф на доставку.

Пожалуйста, проверьте данные заказа и предложите стоимость доставки.

Трек-номер: ${trackingNumber}

Офис отправления: ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.ru}](${orderUrl})`;
}

export function getUnderReviewTelegramTemplate(params: TelegramOrderNotificationParams): string {
  const { trackingNumber, fromOffice, orderUrl } = params;

  return `Հայերեն

📦 Նոր պատվեր է գրանցվել

Հաճախորդը գրանցել է նոր պատվեր։ Խնդրում ենք ստուգել պատվերի տվյալները։

Պատվերի համար՝ ${trackingNumber}

Ուղարկման գրասենյակ՝ ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.hy}](${orderUrl})

English

📦 New Order Created

A customer has successfully created a new order. Please review the order details.

Tracking Number: ${trackingNumber}

Origin Office: ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.en}](${orderUrl})

Русский

📦 Создан новый заказ

Клиент успешно оформил новый заказ. Пожалуйста, проверьте данные заказа.

Трек-номер: ${trackingNumber}

Офис отправления: ${fromOffice}

[${TELEGRAM_ORDER_BUTTON_LABELS.ru}](${orderUrl})`;
}

export function getOrderNotificationMessage(
  status: OrderStatus | string,
  params: TelegramOrderNotificationParams,
): string | null {
  if (status === OrderStatus.PENDING_ESTIMATE) {
    return getPendingEstimateTelegramTemplate(params);
  }

  if (status === OrderStatus.UNDER_REVIEW) {
    return getUnderReviewTelegramTemplate(params);
  }

  return null;
}

export interface TelegramEstimateNotificationParams {
  trackingNumber: string;
  estimatedPrice: number | string;
  orderUrl: string;
  language?: string;
}

export function getEstimateSubmittedTelegramTemplate(params: TelegramEstimateNotificationParams): string {
  const { trackingNumber, estimatedPrice, orderUrl } = params;

  return `**Հայերեն**

💰 **Ձեր առաքման արժեքը գնահատվել է**

Մեր աշխատակիցը գնահատել է Ձեր պատվերի առաքման արժեքը։

**Պատվերի համար՝** ${trackingNumber}

**Առաջարկվող առաքման արժեք՝** ${estimatedPrice} AMD

Խնդրում ենք մուտք գործել Ձեր անձնական էջ՝ առաջարկը դիտելու և ընդունելու կամ չեղարկելու համար։

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

---

**English**

💰 **Your Shipping Price Has Been Estimated**

Our operator has submitted a proposed shipping price for your order.

**Tracking Number:** ${trackingNumber}

**Proposed Shipping Price:** ${estimatedPrice} AMD

Please visit your account to review the estimate and accept or cancel it.

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

---

**Русский**

💰 **Стоимость доставки вашего заказа рассчитана**

Наш сотрудник рассчитал предварительную стоимость доставки вашего заказа.

**Трек-номер:** ${trackingNumber}

**Предложенная стоимость доставки:** ${estimatedPrice} AMD

Пожалуйста, войдите в личный кабинет, чтобы ознакомиться с предложением и принять или отменить его.

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;
}

export type TelegramEstimateDecisionNotificationParams = TelegramEstimateNotificationParams;

export function getEstimateAcceptedTelegramTemplate(params: TelegramEstimateDecisionNotificationParams): string {
  const { trackingNumber, estimatedPrice, orderUrl } = params;

  return `Հայերեն

✅ Հաճախորդը հաստատել է առաքման արժեքը

Հաճախորդը ընդունել է Ձեր առաջարկած առաքման արժեքը։ Պատվերն այժմ գրանցված է։

Պատվերի համար՝ ${trackingNumber}

Հաստատված առաքման արժեք՝ ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

✅ Customer Accepted the Shipping Estimate

The customer has accepted your proposed shipping price. The order is now registered.

Tracking Number: ${trackingNumber}

Accepted Shipping Price: ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

✅ Клиент принял предложенную стоимость доставки

Клиент согласился с предложенной вами стоимостью доставки. Заказ теперь зарегистрирован.

Трек-номер: ${trackingNumber}

Подтверждённая стоимость доставки: ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;
}

export function getEstimateCancelledTelegramTemplate(params: TelegramEstimateDecisionNotificationParams): string {
  const { trackingNumber, estimatedPrice, orderUrl } = params;

  return `Հայերեն

❌ Հաճախորդը մերժել է առաքման արժեքի առաջարկը

Հաճախորդը չի ընդունել առաջարկված առաքման արժեքը և չեղարկել է հարցումը։

Պատվերի համար՝ ${trackingNumber}

Առաջարկված առաքման արժեք՝ ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

❌ Customer Rejected the Shipping Estimate

The customer did not accept the proposed shipping price and cancelled the request.

Tracking Number: ${trackingNumber}

Proposed Shipping Price: ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

❌ Клиент отклонил предложенную стоимость доставки

Клиент не принял предложенную стоимость доставки и отменил запрос.

Трек-номер: ${trackingNumber}

Предложенная стоимость доставки: ${estimatedPrice} AMD

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;
}

export interface TelegramCustomerStatusNotificationParams {
  trackingNumber: string;
  orderUrl: string;
  language?: string;
}

export function getCustomerStatusUpdateTelegramTemplate(
  status: OrderStatus | string,
  params: TelegramCustomerStatusNotificationParams,
): string | null {
  const { trackingNumber, orderUrl } = params;

  switch (status) {
    case OrderStatus.UNDER_REVIEW:
      return `Հայերեն

⏳ Ձեր պատվերը ստուգման փուլում է

Ձեր պատվերը հաջողությամբ ստացվել է և գտնվում է ստուգման փուլում։ Մենք կտեղեկացնենք Ձեզ հետագա թարմացումների մասին։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

⏳ Your Order Is Under Review

Your order has been successfully received and is currently under review. We will notify you about further updates.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

⏳ Ваш заказ находится на проверке

Ваш заказ успешно получен и находится на проверке. Мы сообщим вам о дальнейших обновлениях.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.PENDING_ESTIMATE:
      return `Հայերեն

💰 Ձեր պատվերի առաքման արժեքը գնահատման փուլում է

Ձեր պատվերի համար առաքման սակագին չկա։ Մեր աշխատակիցները հաշվարկում են առաքման առաջարկվող արժեքը։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

💰 Your Shipping Price Is Being Estimated

No shipping tariff is currently available for your order. Our team is working on a proposed shipping price.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

💰 Стоимость доставки вашего заказа рассчитывается

Для вашего заказа пока нет установленного тарифа. Наши сотрудники рассчитывают предварительную стоимость доставки.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.REGISTERED:
      return `Հայերեն

✅ Ձեր պատվերը գրանցված է

Ձեր պատվերը հաջողությամբ գրանցվել է և պատրաստ է առաքման հաջորդ փուլին։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

✅ Your Order Has Been Registered

Your order has been successfully registered and is ready for the next stage of delivery.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

✅ Ваш заказ зарегистрирован

Ваш заказ успешно зарегистрирован и готов к следующему этапу доставки.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.REJECTED:
      return `Հայերեն

❌ Ձեր պատվերը մերժվել է

Ցավոք, Ձեր պատվերը չի կարող ընդունվել։ Լրացուցիչ տեղեկությունների համար խնդրում ենք կապվել մեր աշխատակիցների հետ։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

❌ Your Order Has Been Rejected

Unfortunately, your order could not be accepted. Please contact our support team for more information.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

❌ Ваш заказ отклонён

К сожалению, ваш заказ не может быть принят. Для получения дополнительной информации свяжитесь с нашей службой поддержки.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.FOREIGN_WAREHOUSE:
      return `Հայերեն

📦 Ձեր պատվերը հասել է արտասահմանյան պահեստ

Ձեր պատվերը հասել է մեր արտասահմանյան պահեստ և պատրաստվում է տեղափոխման հաջորդ փուլին։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

📦 Your Order Has Arrived at the Foreign Warehouse

Your order has arrived at our foreign warehouse and is being prepared for the next stage of transportation.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

📦 Ваш заказ поступил на зарубежный склад

Ваш заказ поступил на наш зарубежный склад и готовится к следующему этапу транспортировки.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.IN_TRANSIT:
      return `Հայերեն

🚚 Ձեր պատվերը ճանապարհին է

Ձեր պատվերն ուղարկվել է և գտնվում է դեպի Հայաստան տեղափոխման ճանապարհին։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

🚚 Your Order Is In Transit

Your order has been dispatched and is currently on its way to Armenia.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

🚚 Ваш заказ в пути

Ваш заказ отправлен и находится в процессе транспортировки в Армению.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.ARRIVED:
      return `Հայերեն

📍 Ձեր պատվերը հասել է Հայաստան

Ձեր պատվերը հասել է Հայաստան և անցնում է ընդունման ու մշակման գործընթացը։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

📍 Your Order Has Arrived in Armenia

Your order has arrived in Armenia and is undergoing the receiving and processing procedure.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

📍 Ваш заказ прибыл в Армению

Ваш заказ прибыл в Армению и проходит процедуру приёма и обработки.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.READY:
      return `Հայերեն

🎉 Ձեր պատվերը պատրաստ է ստացման

Ձեր պատվերն արդեն հասանելի է ստացման համար։ Խնդրում ենք այցելել համապատասխան գրասենյակ։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

🎉 Your Order Is Ready for Pickup

Your order is now available for pickup. Please visit the designated office to collect it.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

🎉 Ваш заказ готов к получению

Ваш заказ уже доступен для получения. Пожалуйста, посетите соответствующий офис.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    case OrderStatus.DELIVERED:
      return `Հայերեն

🎊 Ձեր պատվերը հանձնվել է

Ձեր պատվերը հաջողությամբ հանձնվել է ստացողին։ Շնորհակալություն AmTrans-ն ընտրելու համար։

Պատվերի համար՝ ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.hy}</a>

English

🎊 Your Order Has Been Delivered

Your order has been successfully delivered to the recipient. Thank you for choosing AmTrans.

Tracking Number: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.en}</a>

Русский

🎊 Ваш заказ доставлен

Ваш заказ успешно передан получателю. Спасибо, что выбрали AmTrans.

Трек-номер: ${trackingNumber}

<a href="${orderUrl}">${TELEGRAM_ORDER_BUTTON_LABELS.ru}</a>`;

    default:
      return null;
  }
}
