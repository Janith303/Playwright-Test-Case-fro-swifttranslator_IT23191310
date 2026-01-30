import { test, expect } from '@playwright/test';

// Define your test cases here
const testData = [
  // positive test cases

  { id: "Pos_Fun_001", input: "machan uba adha lecture ekata giyaadha? monavadha adha kare ban?", expected: "මචන් උබ අද lecture එකට ගියාද? මොනවද අද කරෙ බන්?" },
  { id: "Pos_Fun_002", input: "aado ubata mokadha ban unee? ", expected: "ආඩො උබට මොකද බන් උනේ? " },
  { id: "Pos_Fun_003", input: "mata oyaava godaak mathakvenavaa anee!!", expected: "මට ඔයාව ගොඩාක් මතක්වෙනවා අනේ!!" },
  { id: "Pos_Fun_004", input: "machan e link eka vaeda karanne naene, mokak hari avulak thiyaNavaavage one drive ekata gihillaa ayeth parak check karalaa balanna. dhaval 12 ta kalin dhaanna onee eka.", expected: "මචන් එ link එක වැඩ කරන්නේ නැනෙ, මොකක් හරි අවුලක් තියණවාවගෙ one drive එකට ගිහිල්ලා අයෙත් පරක් check කරලා බලන්න. දවල් 12 ට කලින් දාන්න ඔනේ එක." },
  { id: "Pos_Fun_005", input: "machan oyaata mathakadha api giya paara karapu project eka? eeke thibba errors okkoma fix karanna apita loku velavak giyaa. eth apita dhila thiyena aluth assignment eka ita vadaa amaaru veiyi kiyala mata hithanava ban. haebayi ita kalin mama lap ekee RAM eka update karanna ona, mokadha dhaen eeka godak slow velaa thiyenne. oyaa dhanna computer shop ekak thiyanavaa nedha, mata puluvan nam kaathaa karala aduvata aran dhipanko. loku udhavuvak me velavee haetiyata. ", expected: "මචන් ඔයාට මතකද අපි ගිය පාර කරපු project එක? ඒකෙ තිබ්බ errors ඔක්කොම fix කරන්න අපිට ලොකු වෙලවක් ගියා. එත් අපිට දිල තියෙන අලුත් assignment එක ඉට වඩා අමාරු වේයි කියල මට හිතනව බන්. හැබයි ඉට කලින් මම lap එකේ RAM එක update කරන්න ඔන, මොකද දැන් ඒක ගොඩක් slow වෙලා තියෙන්නෙ. ඔයා දන්න computer shop එකක් තියනවා නේද, මට පුලුවන් නම් කාතා කරල අඩුවට අරන් දිපන්කො. ලොකු උදවුවක් මෙ වෙලවේ හැටියට. " },
  { id: "Pos_Fun_006", input: "thamuseta mama ekaparak kivvaa nedha bae kiyalaa", expected: "තමුසෙට මම එකපරක් කිව්වා නේද බැ කියලා" },
  { id: "Pos_Fun_007", input: "putha oyaa gedhara edhdhi ATM eken Rs.5000 aran enavadha?", expected: "පුත ඔයා ගෙදර එද්දි ATM එකෙන් Rs.5000 අරන් එනවද?" },
  { id: "Pos_Fun_008", input: "ane oyata puluvannam heta apee gedhara avilla mataa e paadama kiyala dhennako ", expected: "අනෙ ඔයට පුලුවන්නම් හෙට අපේ ගෙදර අවිල්ල මටා එ පාඩම කියල දෙන්නකො " },
  { id: "Pos_Fun_009", input: "mama ehenam iyee kathaa vechcha vidihata karannam", expected: "මම එහෙනම් ඉයේ කතා වෙච්ච විඩිහට කරන්නම්" },
  { id: "Pos_Fun_010", input: "ahh goda kalekin ne kohomadha oyaata....", expected: "අහ්හ් ගොඩ කලෙකින් නේ කොහොමද ඔයාට...." },
  { id: "Pos_Fun_011", input: "visheSha dhaenum dhimayi 2026/2/5 vana dhina paevath vimata thibuNu raesvima ema masama enam 2026/2/10 vana dhina dhakvaa kal dhaemubava karuNikava dhanvaa sitim. ", expected: "විශෙෂ දැනුම් දිමයි 2026/2/5 වන දින පැවත් විමට තිබුණු රැස්විම එම මසම එනම් 2026/2/10 වන දින දක්වා කල් දැමුබව කරුණිකව දන්වා සිටිම්. " },
  { id: "Pos_Fun_012", input: "issara mehe mita vadaa mal thibba.", expected: "ඉස්සර මෙහෙ මිට වඩා මල් තිබ්බ." },
  { id: "Pos_Fun_013", input: "heta 2pm vage vedhdhi envaadha?", expected: "හෙට 2pm වගෙ වෙද්දි එන්වාද?" },
  { id: "Pos_Fun_014", input: "hari hari poddak inna", expected: "හරි හරි පොඩ්ඩක් ඉන්න" },
  { id: "Pos_Fun_015", input: "appatasiri adha lectures thibbadha ban?", expected: "අප්පටසිරි අද lectures තිබ්බද බන්?" },
  { id: "Pos_Fun_016", input: "mama pothak kiyavanavaa", expected: "මම පොතක් කියවනවා" },
  { id: "Pos_Fun_017", input: "Zoom meeting ekak thiyennee 2026/02/05,  7.00AM ta nedha?", expected: "Zoom meeting එකක් තියෙන්නේ 2026/02/05,  7.00AM ට නේද?" },
  { id: "Pos_Fun_018", input: "mama adha panthi giyaa", expected: "මම අද පන්ති ගියා" },
  { id: "Pos_Fun_019", input: "supiri machan!!", expected: "සුපිරි මචන්!!" },
  { id: "Pos_Fun_020", input: "oyaa gedhara edhdhi haal 5KG yi  thava, 2L sprite bothalekuyi genavadha?", expected: "ඔයා ගෙදර එද්දි හාල් 5KG යි  තව, 2L sprite බොතලෙකුයි ගෙනවද?" },
  { id: "Pos_Fun_021", input: "me oyagee vaedee ivarnam?\nivarnam mata meka karala dhennako.", expected: "මෙ ඔයගේ වැඩේ ඉවර්නම්?\nඉවර්නම් මට මෙක කරල දෙන්නකො." },
  { id: "Pos_Fun_022", input: "mama iye class giyaa", expected: "මම ඉයෙ class ගියා" },
  { id: "Pos_Fun_023", input: "heta university ekata yanavadha?", expected: "හෙට university එකට යනවද?" },
  { id: "Pos_Fun_024", input: "07574785426 me number ekta massage ekak dhaanna", expected: "07574785426 මෙ number එක්ට massage එකක් දාන්න" },
  
  //Negative test cases

  { id: "Neg_Fun_001",  input: "hetaubaenavane", expected: "හෙටුඋබඒනවනේ " },
  { id: "Neg_Fun_002",  input: "oyata enn puluwanda", expected: "ඔයාට එන්න පුලුවන්ද?" },
  { id: "Neg_Fun_003",  input: "mama oyata enn kiyala kiyanne me wade karaganna one hinda", expected: "මම ඔයාට එන්න කියලා කියන්නේ මේ වැඩේ කරගන්න ඕන හින්දා" },
  { id: "Neg_Fun_004",  input: "spotify ek wadadha", expected: "spotify එක වැඩද? " },
  { id: "Neg_Fun_005",  input: "oyamawadannnawada", expected: "ඔයමාවදන්නවද " },
  { id: "Neg_Fun_006",  input: "mama gedarayanawaa", expected: "මම ගෙදර යනවා" },
  { id: "Neg_Fun_007",  input: "karunakarala methanin athsan karanna", expected: "කරුණාකරලා මෙතනින් අත්සන් කරන්න" },
  { id: "Neg_Fun_008",  input: "ayubowan!!", expected: "ආයුබෝවන්!!" },
  { id: "Neg_Fun_009",  input: "ammo!!", expected: "අම්මෝ!!" },
  { id: "Neg_Fun_010",  input: "karunika niwedanayai heta dhinasita 12 sreniye siyaluma panthi amathara paya 2ka kalayak pawathwana bawa dhannwasithimi miata widuhalpathi", expected: "කාරුණික නිවේදනයයි හෙට දින සිට 12 ශ්‍රේණියේ සියළුම පන්තියේ අමතර පය දෙකක කාලයක් පවත්වන බව දන්වා සිටිමි මීට විදුහල්පති" },
  
  //UI test cases
  
  { id: "Pos_UI_0001",  input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" }
  
];

for (const data of testData) {
  test(`Test ${data.id}: Convert "${data.input}"`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    await inputArea.fill(data.input);

    await expect(outputBox).toContainText(data.expected);

     if (data.id === 'Pos_UI_0001') {
      await inputArea.fill(data.input);

      const clearBtn = page.getByRole('button', { name: /clear/i }).first();
      await clearBtn.click();

      await expect(inputArea).toHaveValue('');
    }
  });
}