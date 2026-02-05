"use client";

import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { MagneticButton } from "./MagneticButton";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  popular?: boolean;
  newItem?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: MenuItem[];
}

type RawMenuSection = {
  columns: string[];
  rows: Array<Array<string | number | null>>;
};

const menuSource: Record<string, Record<string, RawMenuSection>> = {
  "Кухня": {
    "Завтраки": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Сырники с ванильным соусом и вишневом конфитюром",
          "Украшаются семенами мака и мятой",
          42000,
        ],
        [
          "Омлет классический из 2 яиц",
          "Подаётся с микс-салатом и запечённым хлебом с травами песто",
          39000,
        ],
        ["Начинки к омлету, на ваш выбор", null, null],
        ["Куриная грудка", null, 15000],
        ["Помидоры", null, 10000],
        ["Грибы шампиньоны", null, 19000],
        ["Копченая говядина", null, 18000],
        ["Сыр", null, 15000],
        [
          "Блинчики с начинкой из куриной грудки тушеной в сливках",
          "Подаётся с микс-салатом",
          52000,
        ],
        [
          "Сладкие блинчики",
          "Блинчики с клубникой политые мёдом и посыпанные орехами, мята",
          37000,
        ],
        [
          "Английский завтрак",
          "Яичница-глазунья, копчёная говядина, молочные сосиски, картофельные оладьи, фасоль, помидоры, зелень, запечённый хлеб с травами песто",
          89000,
        ],
        [
          "Завтрак с круассаном, сёмгой и авокадо",
          "Круассан с сёмгой, сливочным сыром и слайсы авокадо",
          119000,
        ],
        [
          "Завтрак охотника",
          "Яичница-глазунья из 2 яиц, грибы, охотничьи колбаски, зелень, хлеб ржаной",
          61800,
        ],
        [
          "Завтрак с овсяными блинами и сёмгой",
          "Слабосолёная сёмга, овсяные блины, яйцо пашот, голландский соус, микс салат",
          98000,
        ],
        [
          "Каша овсяная",
          "С бананом и семенами мака на молоке или воде, сахар",
          39000,
        ],
        [
          "Каша рисовая",
          "С персиками и семенами мака на молоке или воде, сахар",
          39000,
        ],
        [
          "Яичница-глазунья из 2 яиц",
          "Подаётся с микс-салатом, помидорами, хлебом ржаным",
          39000,
        ],
        ["Копченная говядина", null, 15000],
        ["Сосиски", null, 14000],
        ["Куриная грудка", null, 12000],
        [
          "Панкейки",
          "Топпинг на выбор: мёд, шоколад, кленовый сироп. Подаются с сахарной пудрой",
          37500,
        ],
        [
          "Вафли",
          "С бананом, вишней и шоколадом и шариком мороженого, грецкие орехи",
          49000,
        ],
        [
          "Ролл «Цезарь»",
          "Тортилья, цыплёнок, помидоры, микс-салат, сыр, соус «Цезарь»",
          42000,
        ],
      ],
    },
    "Супы": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Суп чечевичный",
          "Чечевица, морковь, болгарский перец, лимон, сливки. Подаётся с тартин хлебом",
          36000,
        ],
        [
          "Суп куриный с лапшой",
          "Куриный бульон, куриное филе, морковь, картофель, лапша. Подаётся с тартин хлебом",
          36000,
        ],
        [
          "Тыквенный суп",
          "Тыква, апельсин, сливки. Подаётся с тартин хлебом",
          36000,
        ],
      ],
    },
    "Сэндвичи": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Венский бейгл",
          "Бейгл, хрустящая курица в панировке, руккола, помидоры, маринованные огурцы, сыр чеддер. Подаётся с микс-салатом и соусом дижон",
          64000,
        ],
        [
          "Бейгл с сёмгой",
          "Бейгл, слабосолёная сёмга, руккола, огурцы, соус тартар. Подаётся с микс-салатом и соусом дижон",
          67000,
        ],
        [
          "Бейгл с тунцом",
          "Бейгл, зелень, свежий помидор, паста из оливок, тунец в собственном соку. Подаётся с микс-салатом и соусом дижон",
          72000,
        ],
      ],
    },
    "Тосты": {
      columns: ["name", "description", "price"],
      rows: [
        ["Тост с авокадо", "Хлеб, авокадо, яйцо пашот, микс-салат", 56000],
        [
          "Тост с лососем",
          "Хлеб, слабосолёная сёмга, сливочный сыр, микс-салат",
          69000,
        ],
        ["Тост с грибами", "Хлеб, грибы, сливки, сыр, микс-салат", 52000],
      ],
    },
    "Салаты": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Салат с моцареллой",
          "Микс-салат, помидоры, огурцы, кабачки, брокколи, сыр «Моцарелла», соус песто",
          68000,
        ],
        [
          "Салат с слабосолёной сёмгой и яйцом пашот",
          "Роллы из сёмги с сливочным сыром, груша, микс-салат, петрушка, яйцо пашот с мёдовой заправкой",
          85000,
        ],
      ],
    },
    "Паста": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Паста с куриной грудкой",
          "Паста с сливочно-томатным соусом, куриная грудка, лук, базилик",
          69000,
        ],
        [
          "«Наполитано»/«Арабьята»",
          "Паста, помидоры, лук, чеснок, базилик, сыр/чили",
          49800,
        ],
        [
          "«Карбонара»",
          "Паста, сливки, копчёная говядина, яйцо, сыр",
          69000,
        ],
        [
          "«Альфредо»",
          "Паста с сливочным соусом, курица, грибы, сыр, мускатный орех",
          69000,
        ],
        [
          "Паста с острыми сосисками",
          "Паста с сливочно-томатным соусом, сосиски, лук, петрушка",
          69000,
        ],
      ],
    },
    "Горячие блюда": {
      columns: ["name", "description", "price"],
      rows: [
        [
          "Курица Терияки",
          "Запечённая курица в соусе терияки, рис, маринованный огурец, салат латук, кунжут, лимон, зелень",
          84000,
        ],
        [
          "Говядина Терияки",
          "Филе говядины в соусе терияки, рис, маринованный огурец, салат латук, кунжут, лимон, зелень",
          135000,
        ],
        [
          "Стейк из форели",
          "Форель в соусе из запечённых трав и чеснока. Подаётся на подушке из картофельного пюре с шпинатом и помидорами черри",
          122000,
        ],
        [
          "Медальоны из говядины",
          "Филе говядины в соусе из баттерната. Подаётся с картофельным пюре и микс-салатом",
          142000,
        ],
        [
          "Куриное филе, запечённое в медово-горчичном соусе",
          "Куриное филе, запечённое в медово-горчичном соусе. Подаётся с рисом и микс-салатом",
          79800,
        ],
        [
          "Котлеты из курицы с овощами",
          "Котлеты из куриного филе, брокколи, морковь, картофель, красный лук, сливочный соус",
          83600,
        ],
        [
          "Говядина с овощами и рисом",
          "Филе говядины в бальзамическом соусе, обжаренные овощи и рис",
          115500,
        ],
        [
          "Курица с грибами в сливочном соусе",
          "Филе курицы, шампиньоны, сливки. Подаётся с рисом",
          95000,
        ],
        [
          "Говядина с грибами в сливочном соусе",
          "Филе говядины, шампиньоны, сливки. Подаётся с рисом",
          119800,
        ],
      ],
    },
  },
  "Бар": {
    "Кофе": {
      columns: ["name", "description", "малый", "средний", "большой", "XXL"],
      rows: [
        ["Американо", null, 23000, 25000, 29000, 32000],
        ["Батч-брю", null, null, 29800, null, null],
        ["Капучино", null, 25000, 27000, 37000, 39000],
        ["Латте", null, null, 28000, 38000, 40000],
        ["Флэт Уайт", null, 32000, null, null, null],
        ["Эспрессо", null, 19000, null, null, null],
        ["Эспрессо двойной", null, 25000, null, null, null],
        ["Мокко", null, null, null, 59000, null],
        ["Раф кофе", null, null, 36000, 47000, 55000],
        ["Латте Матча Изумрудный", null, null, 48000, null, null],
        ["Латте Матча Лазурный", null, null, 48000, null, null],
        ["Горячий шоколад (60мл)", null, 32000, null, null, null],
        ["Какао", null, null, 43000, 53000, 71000],
        ["Какао с маршмэллоу", null, null, 51000, 56000, 74000],
      ],
    },
    "Фрости": {
      columns: ["name", "description", "малый", "средний", "большой", "XXL"],
      rows: [
        ["Ванильный фрости", null, null, 43000, 53000, 71000],
        ["Шоколадный фрости", null, null, 43000, 53000, 71000],
        ["Карамельный фрости", null, null, 43000, 53000, 71000],
      ],
    },
    "Детоксы": {
      columns: ["name", "description", "малый", "средний", "большой", "XXL"],
      rows: [
        [
          "«Зелёный» детокс",
          "Огурец, сельдерей, яблоко, лимон, имбирь",
          null,
          43000,
          53000,
          71000,
        ],
        [
          "«Красный» детокс",
          "Свёкла, морковь, яблоко, имбирь",
          null,
          43000,
          53000,
          71000,
        ],
        [
          "«Жёлтый» детокс",
          "Апельсин, морковь, яблоко, имбирь",
          null,
          43000,
          53000,
          71000,
        ],
      ],
    },
    "Чай авторский": {
      columns: ["name", "description", "Чашка", "Чайник"],
      rows: [
        ["Облепиховый чай", "Пюре облепихи, мёд", 29000, 44000],
        ["Имбирный чай", "Имбирь, лимон, мёд", 29000, 44000],
        ["Чай с вишней и мёдом", "Пюре из вишни с мёдом, лимон", 29000, 44000],
        [
          "Фиточай с мёдом",
          "Зелёный чай, мята, тимьян, календула, шафран",
          29000,
          44000,
        ],
        ["Ягодный чай", "Ягодное пюре, лимон", 29000, 44000],
        [
          "Шиповник с барбарисом",
          "Сироп барбариса, настой шиповника",
          29000,
          44000,
        ],
        [
          "Китайский чай",
          "Зелёный / чёрный чай, молочный улун, жасмин, барбарис",
          25000,
          39000,
        ],
        ["Чёрный/Зелёный чай", null, null, 19800],
        ["Чёрный/Зелёный чай с лимоном и сахаром", null, null, 25000],
      ],
    },
    "Чай премиальный": {
      columns: ["name", "description", "Чашка", "Чайник"],
      rows: [
        ["Император", null, 29000, 39000],
        ["Токио Роуз", null, 29000, 39000],
        ["Органик Классик", null, 29000, 39000],
        ["Special Gunpowder", null, 29000, 39000],
        ["Jasmine Garden", null, 29000, 39000],
        ["Se Chung", null, 29000, 39000],
        ["Desert Rose", null, 29000, 39000],
        ["Da Hong Pao Gold", null, 50000, 100000],
      ],
    },
    "Фреш": {
      columns: ["name", "description", "малый", "средний", "большой", "XXL"],
      rows: [
        ["Лимонный шот (сок 1 лимона)", null, 24200, null, null, null],
        ["Апельсин", null, null, 53800, 70400, 90200],
        ["Яблоко", null, null, 30800, 39500, 53800],
        ["Морковь", null, null, 24000, 32000, 42000],
        ["Апельсин-морковь", null, null, 37000, 58000, 76000],
        ["Апельсин-яблоко", null, null, 39000, 58300, 79000],
        ["Морковь-яблоко", null, null, 28500, 37200, 51800],
        ["Апельсин-морковь-яблоко", null, null, 46200, 58000, 79000],
      ],
    },
  },
};

const normalizeText = (value: string | null) =>
  value ? value.replace(/\s+/g, " ").trim() : "";

const formatPrice = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const buildItems = (section: RawMenuSection): MenuItem[] => {
  const [, , ...priceLabels] = section.columns;

  return section.rows.map((row) => {
    const [name, description, ...prices] = row;
    const priceEntries = prices
      .map((price, index) =>
        typeof price === "number"
          ? { label: priceLabels[index], value: formatPrice(price) }
          : null,
      )
      .filter(Boolean) as Array<{ label: string; value: string }>;

    const price = priceEntries.length
      ? priceEntries.map((entry) => entry.value).join(" / ")
      : "—";

    const tag =
      priceLabels.length > 1 && priceEntries.length
        ? priceEntries.map((entry) => normalizeText(entry.label)).join(" / ")
        : undefined;

    return {
      name: normalizeText(name as string),
      description: normalizeText(description as string | null),
      price,
      ...(tag ? { tag } : {}),
    };
  });
};

const menuCategories = [
  {
    id: "breakfast",
    name: "Завтраки",
    icon: "🍳",
    description: "Завтраки, каши и утренние блюда.",
    source: menuSource["Кухня"]["Завтраки"],
  },
  {
    id: "soups",
    name: "Супы",
    icon: "🍲",
    description: "Согревающие супы на каждый день.",
    source: menuSource["Кухня"]["Супы"],
  },
  {
    id: "sandwiches",
    name: "Сэндвичи",
    icon: "🥪",
    description: "Бейглы и сэндвичи с сытными начинками.",
    source: menuSource["Кухня"]["Сэндвичи"],
  },
  {
    id: "toasts",
    name: "Тосты",
    icon: "🍞",
    description: "Тосты на свежем хлебе.",
    source: menuSource["Кухня"]["Тосты"],
  },
  {
    id: "salads",
    name: "Салаты",
    icon: "🥗",
    description: "Свежие салаты и лёгкие сочетания.",
    source: menuSource["Кухня"]["Салаты"],
  },
  {
    id: "pasta",
    name: "Паста",
    icon: "🍝",
    description: "Классические пасты с насыщенными соусами.",
    source: menuSource["Кухня"]["Паста"],
  },
  {
    id: "mains",
    name: "Горячие блюда",
    icon: "🍛",
    description: "Основные блюда с гарнирами.",
    source: menuSource["Кухня"]["Горячие блюда"],
  },
  {
    id: "coffee",
    name: "Кофе",
    icon: "☕",
    description: "Классический кофе и кофейные напитки.",
    source: menuSource["Бар"]["Кофе"],
  },
  {
    id: "frosty",
    name: "Фрости",
    icon: "🍨",
    description: "Холодные фрости с насыщенным вкусом.",
    source: menuSource["Бар"]["Фрости"],
  },
  {
    id: "detox",
    name: "Детоксы",
    icon: "🥤",
    description: "Овощные и фруктовые детокс-миксы.",
    source: menuSource["Бар"]["Детоксы"],
  },
  {
    id: "signature-tea",
    name: "Чай авторский",
    icon: "🍵",
    description: "Чай с ягодами, травами и мёдом.",
    source: menuSource["Бар"]["Чай авторский"],
  },
  {
    id: "premium-tea",
    name: "Чай премиальный",
    icon: "🫖",
    description: "Премиальные сорта чая.",
    source: menuSource["Бар"]["Чай премиальный"],
  },
  {
    id: "fresh",
    name: "Фреш",
    icon: "🧃",
    description: "Свежевыжатые соки и шоты.",
    source: menuSource["Бар"]["Фреш"],
  },
];

const menuData: MenuCategory[] = menuCategories.map((category) => ({
  id: category.id,
  name: category.name,
  icon: category.icon,
  description: category.description,
  items: buildItems(category.source),
}));

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id ?? "");
  const currentCategory =
    menuData.find((cat) => cat.id === activeCategory) ?? menuData[0];

  if (!currentCategory) {
    return null;
  }

  return (
    <section
      className="relative py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
      id="menu"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-white/50 text-sm tracking-widest uppercase mb-4">
              Kitchen &amp; Bar
            </span>
            <h2 className="text-5xl sm:text-6xl font-extralight mb-4">
              Our Menu
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Breakfasts, main dishes, and signature drinks prepared fresh
              throughout the day.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Tabs */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-5 py-3 text-sm tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span className="uppercase">{category.name}</span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Category Description */}
        <RevealOnScroll delay={150}>
          <div className="text-center mb-12">
            <p className="text-white/50 text-sm tracking-wide">
              {currentCategory.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {currentCategory.items.map((item, index) => (
            <RevealOnScroll key={`${item.name}-${index}`} delay={index * 50}>
              <div className="group border-t border-white/10 py-6 cursor-pointer transition-all hover:bg-white/[0.02] px-4 -mx-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="text-xl font-light group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-white/10 text-white/70">
                          Popular
                        </span>
                      )}
                      {item.newItem && (
                        <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-white text-black">
                          New
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-white/40 text-sm leading-relaxed mb-1">
                        {item.description}
                      </p>
                    )}
                    {item.tag && (
                      <span className="text-xs text-white/30 tracking-wide">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-light text-white text-right leading-snug">
                      {item.price}
                    </span>
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all opacity-0 group-hover:opacity-100">
                      <span className="text-sm">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom border for last items */}
        <div className="border-t border-white/10 mt-0" />

        {/* Menu Stats */}
        <RevealOnScroll delay={300}>
          <div className="flex flex-wrap justify-center gap-12 mt-16 py-8 border-y border-white/10">
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                {menuData.reduce((acc, cat) => acc + cat.items.length, 0)}+
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Menu Items
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">15</div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Origins
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                {menuData.length}
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                100%
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Ethically Sourced
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm mb-6">
              Ask about our seasonal specials and rotating single-origin
              selections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton className="border border-white/30 px-10 py-4 text-sm tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300">
                Download Full Menu
              </MagneticButton>
              <MagneticButton className="bg-white text-black px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300">
                Order Online
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
