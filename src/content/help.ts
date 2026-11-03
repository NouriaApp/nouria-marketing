export type HelpSection = {
  title: string;
  paragraphs?: string[];
  steps?: string[];
  note?: string;
};

export type HelpArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keywords: string[];
  sections: HelpSection[];
  related: string[];
};

export const helpCategories = [
  { id: "getting-started", title: "Getting started", description: "Your first steps toward a kitchen that feels a little more together.", icon: "sun" },
  { id: "planning", title: "Today & your plan", description: "Find a meal, plan your week, and adapt when life changes.", icon: "calendar" },
  { id: "pantry", title: "Your kitchen", description: "Keep track of ingredients, amounts, storage, and recorded dates.", icon: "pantry" },
  { id: "vision", title: "AmpleatVision & scanning", description: "Bring shelves, groceries, barcodes, and receipts into focus.", icon: "camera" },
  { id: "recipes", title: "Recipes", description: "Save your favorites, add your own, and share something good.", icon: "book" },
  { id: "cooking", title: "Cooking with Ampleat", description: "Step-by-step guidance, timers, and a little help along the way.", icon: "pot" },
  { id: "groceries", title: "Groceries & leftovers", description: "Know what to buy and make room for what’s already made.", icon: "bag" },
  { id: "household", title: "Your household", description: "One shared kitchen, with a place for everyone at the table.", icon: "users" },
  { id: "memory", title: "Intelligence & memory", description: "Understand recommendations and choose what Ampleat remembers.", icon: "sparkles" },
  { id: "settings", title: "Preferences & your device", description: "Food rules, reminders, widgets, Siri, and personal touches.", icon: "sliders" },
  { id: "account", title: "Account, access & support", description: "Sign in, understand membership, and get a helping hand.", icon: "shield" },
] as const;

// Customer instructions are verified against the current nouria-mobile screens.
// Keep source references and beta availability notes in docs/help-center.md.
export const helpArticles: HelpArticle[] = [
  {
    slug: "welcome-to-ampleat", category: "getting-started", title: "Welcome to Ampleat", description: "Get to know your shared kitchen and the five main tabs.", keywords: ["overview", "product", "navigation", "beginner"],
    sections: [
      { title: "A little less figuring out", paragraphs: ["Ampleat brings your ingredients, meals, grocery list, recipes, and cooking history into one kitchen. Use it on your own or share a kitchen with your household. Ampleat Intelligence connects those records so a meal change can also update what you need to buy."] },
      { title: "Find your way around", steps: ["Today: see breakfast, lunch, dinner, and snacks, choose a meal, and notice ingredients with recorded dates coming up.", "Your Plan: choose a date, manage each meal, and plan several days at a time.", "Kitchen: add ingredients, check quantities and dates, or open AmpleatVision.", "Recipes: browse saved meals, add your own recipes, and revisit cooking history.", "Settings: edit your cooking profile, manage your household and memory, and find account and support options."] },
      { title: "Start small", paragraphs: ["You can skip pantry setup and return later. A few foods you actually use and one meal you want to cook are enough to begin. Shared changes need an internet connection."], note: "Ampleat is currently a free, invitation-only private beta. Some features depend on your installed app build." },
    ], related: ["first-time-setup", "plan-a-meal", "create-household"],
  },
  {
    slug: "first-time-setup", category: "getting-started", title: "Set up your kitchen for the first time", description: "Tell Ampleat how you cook, without cataloging your whole kitchen.", keywords: ["onboarding", "setup", "skip", "starter pantry"],
    sections: [
      { title: "Before setup", paragraphs: ["Create an account, verify your email, and check your beta invitation. The email you use must be approved for the private beta. A household invitation does not replace beta approval."] },
      { title: "Walk through the five setup steps", steps: ["Your everyday cooking: optionally add your name, servings, confidence, typical cooking time, cooking days, and meals you usually skip.", "Cuisines and equipment: select your favorites and the tools you can use. You can add custom choices.", "Food preferences: choose dietary preferences and foods you would rather avoid.", "Firm food rules: record allergies, religious restrictions, and other absolute exclusions that apply to you.", "Quick-start your pantry: tap foods you have, add a custom food, or skip pantry setup."] },
      { title: "You can change your answers", paragraphs: ["Setup questions are optional and usable defaults are provided. Update your answers later in Settings. Starter foods record that you have an ingredient; their amounts remain unknown until you check them. Add important restrictions before using recommendations." ] },
    ], related: ["food-rules", "unknown-amounts", "beta-access"],
  },
  {
    slug: "search-your-kitchen", category: "getting-started", title: "Find something across your kitchen", description: "Search recipes, ingredients, planned meals, pantry records, and groceries together.", keywords: ["search", "find", "shortcuts", "ingredient"],
    sections: [
      { title: "Open kitchen search", steps: ["Tap the search icon in a main screen’s header.", "Enter a recipe title, ingredient, meal, or grocery item. Use the category selector to narrow your search.", "Choose a result to open its recipe, pantry record, plan, or grocery list."] },
      { title: "Jump into a task", paragraphs: ["Quick actions let you scan your kitchen, record groceries you bought, open the grocery list, or browse your plan. Ingredient suggestions can help when you do not have a particular recipe in mind."] },
      { title: "What search includes", paragraphs: ["Search uses the current household’s loaded information, including the next seven days of meals. It does not store search history. Search opens the relevant screen; it does not start cooking or save a kitchen change. Refresh your data if a recent household update is missing."] },
    ], related: ["recipe-library", "pantry-search", "connection-and-sync"],
  },
  {
    slug: "plan-a-meal", category: "planning", title: "Choose your next meal", description: "Suggest a meal or choose a saved recipe for breakfast, lunch, dinner, or a snack.", keywords: ["today", "generate", "suggest", "craving", "pantry only"],
    sections: [
      { title: "Start from Today", steps: ["Open Today and select breakfast, lunch, dinner, or snacks.", "Tap Suggest a meal. Set your maximum cooking time and servings, and optionally describe what sounds good.", "Choose Use what you have or Allow extra groceries.", "Review the proposed meal and any grocery changes. Tap Use this meal to save it."] },
      { title: "Prefer something you already know?", paragraphs: ["Choose recipe opens a picker of saved and cooked recipes. Select one, review the meal, and confirm it for the selected date and meal type. Browsing or previewing a recipe does not use ingredients."] },
      { title: "Check what you need", paragraphs: ["Suggestions consider recorded ingredients, time, equipment, restrictions, and confirmed preferences. Unknown amounts may need checking. Review the recipe’s ingredient list and any missing items before cooking." ] },
    ], related: ["plan-several-days", "change-a-meal", "how-intelligence-works"],
  },
  {
    slug: "plan-several-days", category: "planning", title: "Plan several days at a time", description: "Build a plan for one meal type while keeping meals you have locked or completed.", keywords: ["week", "weekly", "calendar", "seven days", "breakfast", "lunch", "snack"],
    sections: [
      { title: "Build your plan", steps: ["Open Your Plan and choose a date in the seven-day selector.", "Tap Plan several days and choose the meal type you want to plan.", "Enter the number of days, from 1 to 7, and choose your ingredient or extra-grocery preference.", "Tap Preview plan, review the changed meals and grocery consequences, and confirm the proposal."] },
      { title: "Each meal has its own place", paragraphs: ["Breakfast, lunch, dinner, and snacks are managed separately. Planning several dinners does not fill every breakfast and lunch. Repeat the process for another meal type if you want a fuller plan."] },
      { title: "Keep the decisions you like", paragraphs: ["Locked and completed meals are preserved when building a plan. A proposal is a preview until you accept it. If the household changes while you are reviewing, refresh and request a fresh preview."] },
    ], related: ["lock-and-undo", "grocery-list", "change-a-meal"],
  },
  {
    slug: "change-a-meal", category: "planning", title: "Change a meal when your day changes", description: "Adjust time, servings, ingredients, or plans without rebuilding your whole week.", keywords: ["replan", "regenerate", "missing ingredient", "eating out", "my day changed"],
    sections: [
      { title: "Make a focused change", steps: ["Open the meal in Today or Your Plan and choose its change action.", "Select the reason that fits. Adjust time or servings, identify a missing ingredient, or use the option for eating out.", "Add an optional direction for the replacement and choose whether extra groceries are allowed.", "Review the affected meals and grocery changes, then confirm."] },
      { title: "Try another suggestion", paragraphs: ["Use Suggest something else if the proposal does not fit. You can explain what you would like changed, or leave the explanation blank. Edit preferences returns to the current planning questions."] },
      { title: "A one-time change stays one-time", paragraphs: ["Changing a meal does not create a permanent dislike or override anyone’s firm food rules. Household learning uses completed cooking and explicit feedback; lasting suggested preferences need confirmation."] },
    ], related: ["lock-and-undo", "memory-controls", "food-rules"],
  },
  {
    slug: "lock-and-undo", category: "planning", title: "Keep a meal, review changes, or undo", description: "Understand meal locks, previews, and the limits on undoing a plan change.", keywords: ["lock", "unlock", "undo", "stale", "conflict", "15 minutes"],
    sections: [
      { title: "Lock a meal you want to keep", paragraphs: ["Use a planned meal’s lock action to preserve it during replanning. Unlock it when you are ready to change it. Completed meals are also preserved."] },
      { title: "Review before saving", paragraphs: ["The preview shows changed meals and ingredients being added to or removed from groceries. Nothing in the preview replaces your saved plan until you confirm. If ingredients, restrictions, or the plan change during review, the old preview may no longer be valid. Refresh and request another."] },
      { title: "Undo a recent plan change", steps: ["After accepting a proposal, use Undo change on the confirmation screen.", "Undo is available for up to 15 minutes, provided another change has not been saved and cooking has not started.", "If undo is unavailable, change the meal again using the current kitchen information."], note: "Plan undo cannot erase later household activity. Pantry edits and Vision scans have their own available undo controls." },
    ], related: ["plan-several-days", "change-a-meal", "connection-and-sync"],
  },
  {
    slug: "add-pantry-items", category: "pantry", title: "Add and edit ingredients", description: "Record what you have, how much is left, and where you keep it.", keywords: ["manual", "pantry", "quantity", "unit", "stock", "inventory"],
    sections: [
      { title: "Add an ingredient manually", steps: ["Open Kitchen and tap the plus button.", "Enter the food name and any brand information. Choose a category and storage location.", "Enter a known amount and unit, or keep the amount unknown when you cannot confirm it. A plain number can be used as a count; measurements such as 500 g or 1.5 l are also supported.", "Add a recorded or estimated date and a low-stock threshold if useful, review the fields, and save."] },
      { title: "Keep stock current", paragraphs: ["Open an item to edit its details or adjust its amount as food is used, bought, or corrected. Use quantities you can actually confirm. A package label such as a bag is not automatically converted to an invented weight."] },
      { title: "Separate batches when needed", paragraphs: ["Food bought on different dates or stored separately may need separate records. If an older amount is unknown, confirm the total before combining it with a purchase, or record the new food as a separate batch."] },
    ], related: ["unknown-amounts", "pantry-dates", "pantry-history"],
  },
  {
    slug: "unknown-amounts", category: "pantry", title: "Understand unknown amounts and Check amounts", description: "Plan with a partial pantry without treating guesses as confirmed stock.", keywords: ["uncertain", "estimated", "null", "starter", "quantity", "check the kitchen"],
    sections: [
      { title: "Having a food is different from measuring it", paragraphs: ["Starter pantry selections can record an ingredient without claiming a package size. Unknown and estimated amounts are kept distinct from confirmed amounts. Ampleat can use the ingredient name when looking for ideas, but an unknown amount cannot be treated as confirmed stock to spend."] },
      { title: "Confirm an amount", steps: ["Open Kitchen and select Check amounts.", "Check what is actually left in each listed item.", "Edit the item, enter the remaining amount and matching unit, and save."] },
      { title: "Why groceries may ask you to check", paragraphs: ["An ingredient may be present but still need a quantity check before Ampleat knows whether there is enough for the plan. Check the kitchen and To buy are different tasks. Compatible measurements can be compared; a slice is not treated as a loaf and a bag is not assigned a guessed weight."] },
    ], related: ["grocery-list", "add-pantry-items", "vision-observation-purchase"],
  },
  {
    slug: "pantry-dates", category: "pantry", title: "Recorded dates, storage, and low-stock alerts", description: "Keep useful reminders without mistaking a date for a freshness check.", keywords: ["expiry", "expiration", "use soon", "fridge", "freezer", "low stock"],
    sections: [
      { title: "Record what you know", paragraphs: ["Ingredients can be stored in Pantry, Fridge, or Freezer. Enter a known date, an estimated date, or leave the date unknown. Exact and estimated dates have different meanings; a photo does not establish a safe storage life."] },
      { title: "Find food that needs attention", steps: ["Use Expiring soon in Kitchen to review approaching recorded dates.", "Check Today’s Use soon suggestions for recipe ideas using relevant ingredients.", "Set an item’s low-stock threshold if you want it included in Low stock when its recorded amount runs low."] },
      { title: "Dates are reminders", paragraphs: ["Ampleat uses the information you record to help organize your kitchen. A date, recommendation, or photo is not a guarantee that food is fresh or suitable to eat. Review the product and its storage history yourself. Optional expiration reminders can be enabled in Settings."] },
    ], related: ["notifications-and-timers", "pantry-search", "food-rules"],
  },
  {
    slug: "pantry-search", category: "pantry", title: "Search, sort, and organize your pantry", description: "Use categories, storage filters, and stock views to find what you need.", keywords: ["categories", "filter", "sort", "brand", "rename", "delete category"],
    sections: [
      { title: "Find an ingredient", steps: ["Open Kitchen and search by food name, brand, or category.", "Choose All items, Expiring soon, Low stock, or Check amounts to focus the list.", "Use a storage-location filter and the sort button to organize the results. Clear filters when you want the full pantry again."] },
      { title: "Manage your own categories", paragraphs: ["Tap Manage pantry categories to create, rename, or delete a group. When you delete a category, its foods move to Other rather than being removed from your pantry."] },
      { title: "Search beyond pantry records", paragraphs: ["The header’s kitchen search also looks across recipes, planned meals, and groceries. The pantry search field is useful when you specifically want to inspect or correct stock."] },
    ], related: ["search-your-kitchen", "add-pantry-items", "pantry-history"],
  },
  {
    slug: "pantry-history", category: "pantry", title: "Inventory history, removals, and corrections", description: "See how a pantry amount changed and use available recovery actions.", keywords: ["ledger", "transaction", "undo", "restore", "remove", "history"],
    sections: [
      { title: "See what changed", paragraphs: ["Open Kitchen and tap View inventory history. The list records additions, use, corrections, and removals so you can understand how recorded stock arrived at its current amount."] },
      { title: "Correct or remove an item", steps: ["Open the pantry item and check its current details.", "Edit incorrect fields or adjust the quantity. Use Remove from pantry for an item you no longer want recorded.", "Review the confirmation. If an Undo action is shown after removal, use it to restore the item."] },
      { title: "When another person has changed stock", paragraphs: ["An edit based on an older pantry amount may be rejected to protect a newer household update. Refresh, inspect the latest record, and make the correction again. Do not repeat a purchase as a new entry when the app offers to retry the same save."] },
    ], related: ["vision-history-undo", "confirm-cooking-usage", "connection-and-sync"],
  },
  {
    slug: "scan-with-ampleatvision", category: "vision", title: "Scan your kitchen with AmpleatVision", description: "Photograph ingredients, review the suggestions, and confirm a batch together.", keywords: ["camera", "photo", "shelf", "spices", "labels", "AI scan"],
    sections: [
      { title: "Photograph what is there", steps: ["Open Kitchen → AmpleatVision, or use Scan kitchen from Today.", "Choose a scan mode suited to your foods and select a suggested storage location.", "Allow camera access when asked. Photograph one shelf at a time in good light, keeping foods and readable labels visible. Add more photos if needed.", "Optionally tell Ampleat what to look for, such as the names of similar-looking beans or spices."] },
      { title: "Review before saving", paragraphs: ["Edit each suggested ingredient’s name, category, quantity, unit, storage, date, and threshold where needed. Check uncertain matches yourself. Select only items you want saved, confirm the required checks, and save the batch. You can add a missing ingredient manually."] },
      { title: "What the photo cannot tell you", paragraphs: ["AmpleatVision suggests food identities; it cannot establish freshness, allergens, or a remaining amount hidden inside packaging. Items outside the photo are not removed. Browser previews accept supported food-photo uploads; camera behavior depends on your app and device."] },
    ], related: ["vision-observation-purchase", "vision-history-undo", "scan-troubleshooting"],
  },
  {
    slug: "vision-observation-purchase", category: "vision", title: "Observe stock or record a purchase?", description: "Choose whether a scan updates what is already there or adds something newly bought.", keywords: ["restock", "duplicate", "observe", "purchase", "merge", "total"],
    sections: [
      { title: "Observe: confirm the total here now", paragraphs: ["Use an observation when you are checking food already in your kitchen. Enter the total remaining amount you can confirm. If you scan the same matching food again, the confirmed amount updates the record instead of being added twice. Other foods outside the photo stay in your pantry."] },
      { title: "Purchase: add only the new amount", paragraphs: ["Use purchase recording for groceries you just bought. Enter the amount newly acquired, not the total including older stock. Matching stock is increased after review. When the previous amount is unknown, confirm a total or record the new purchase as a separate batch."] },
      { title: "Check the proposed match", steps: ["Review the recorded stock shown beside the detected ingredient.", "Confirm the identity, amount, unit, and whether this is an observation or purchase.", "Check date information. Observing food without a new established date keeps a known recorded date.", "Save only once, and use the same-batch retry if the app says the first save may have reached the service."] },
    ], related: ["scan-with-ampleatvision", "record-grocery-purchases", "unknown-amounts"],
  },
  {
    slug: "barcode-and-receipt-scanning", category: "vision", title: "Scan barcodes and grocery receipts", description: "Use product details or receipt suggestions as a starting point for pantry entries.", keywords: ["barcode", "receipt", "amazon", "catalog", "lookup", "scanner"],
    sections: [
      { title: "Look up a barcode", steps: ["Open Kitchen’s scanner and choose barcode scanning.", "Scan the code or enter its digits manually and tap Look up.", "Review the product result and fill in the amount, category, storage, and date before saving. If the code is missing from the catalog, enter the food manually."] },
      { title: "Read a receipt", paragraphs: ["Choose receipt scanning, photograph a readable grocery receipt, and review the suggested food names and quantities. The scanner includes instructions for Amazon receipts. Confirm each item’s category, storage, and date; skip entries that are not food or that were read incorrectly."] },
      { title: "Suggestions are not saved automatically", paragraphs: ["Catalog and receipt results remain editable until you save them. A product listing does not verify the exact allergens or package in your hand. Receipt scanning extracts candidate foods and amounts; it is not live retailer pricing or a payment-total tracker."] },
    ], related: ["add-pantry-items", "scan-troubleshooting", "food-rules"],
  },
  {
    slug: "vision-history-undo", category: "vision", title: "Review scan history or undo a scan", description: "Revisit confirmed ingredients and recover from an incorrect scan when possible.", keywords: ["scan history", "restock checklist", "undo", "photos", "privacy"],
    sections: [
      { title: "Revisit confirmed scans", paragraphs: ["Open AmpleatVision → Scan history to see the last 20 confirmed scans. Entries show confirmed ingredient details and the scan date. Use a previous scan as a restock checklist when useful; seeing a checklist does not itself add food."] },
      { title: "Undo an incorrect batch", steps: ["After saving a batch, review the confirmation and use Undo this scan if needed.", "If stock has changed since the scan and undo is refused, refresh and inspect the affected items.", "Correct the current amounts manually so later purchases or cooking are preserved."] },
      { title: "What history keeps", paragraphs: ["Scan history contains confirmed item details rather than the photos. Photos are discarded from the scan when you leave. Photo analysis sends the image to the AI service; provider safety retention may still apply."] },
    ], related: ["vision-observation-purchase", "pantry-history", "privacy-and-data"],
  },
  {
    slug: "scan-troubleshooting", category: "vision", title: "Fix camera, barcode, and scan problems", description: "Recover from denied permission, unclear photos, missing products, or unavailable analysis.", keywords: ["not working", "permission", "error", "no items found", "unavailable", "camera denied"],
    sections: [
      { title: "The camera will not open", paragraphs: ["Use Enable camera to request access. If access was denied, check Ampleat’s camera permission in your device settings. You can enter a barcode manually or add an ingredient without using the camera."] },
      { title: "The result is missing or incorrect", steps: ["Try a closer photo with better light and less overlap. Keep one shelf or label in view.", "Add a correction for similar-looking foods. Check powders, loose grains, and unlabelled jars yourself.", "If a barcode is not found, review the item manually. Product catalogs do not contain every food.", "Skip incorrect suggestions or add the missing ingredient yourself before saving."] },
      { title: "Analysis or saving is unavailable", paragraphs: ["Check your connection. Photo analysis can also be limited or temporarily disabled during beta. Use manual entry while it is unavailable. If a batch save may already have succeeded, use the offered retry for that batch rather than recording the purchase again."] },
    ], related: ["add-pantry-items", "connection-and-sync", "contact-support"],
  },
  {
    slug: "recipe-library", category: "recipes", title: "Browse your recipe library and favorites", description: "Find saved recipes by name, ingredient, or meal type.", keywords: ["library", "favorites", "filter", "saved", "search", "pantry coverage"],
    sections: [
      { title: "Find a saved meal", steps: ["Open Recipes. It opens your library even if cooking is paused.", "Search a title or ingredient and use the library view or meal filters to narrow the results.", "Open a recipe to review its time, servings, equipment, ingredients, substitutions, and cooking steps. Use its favorite control to keep a favorite."] },
      { title: "Use a recipe in your plan", paragraphs: ["Choose recipe from Today or Your Plan, select a saved recipe, and review it for the chosen meal. When a recipe offers Plan this meal, confirm the resulting preview before it is saved."] },
      { title: "Understand pantry coverage", paragraphs: ["Pantry coverage and missing-ingredient labels compare a recipe with recorded stock. They depend on the accuracy of your pantry, including amounts and units. Check the actual ingredients before starting. Reading a recipe never deducts stock or enters Cook Mode automatically."] },
    ], related: ["add-edit-recipes", "start-resume-cooking", "meal-history"],
  },
  {
    slug: "add-edit-recipes", category: "recipes", title: "Add, edit, or delete your own recipe", description: "Bring a meal you already know into your library and future plans.", keywords: ["custom recipe", "create", "edit", "delete", "ingredients format", "version"],
    sections: [
      { title: "Save a recipe you know", steps: ["Open Recipes and tap Add your own recipe.", "Enter a title, meal type, servings, cooking time, difficulty, equipment, and vegetarian status where relevant.", "Enter each ingredient on its own line as name | quantity | optional substitution. Use a numeric amount and unit, such as Rice | 1 cup.", "Write each cooking step on its own line, then tap Save recipe."] },
      { title: "Make a correction", paragraphs: ["Open a saved recipe’s meal details and choose Edit recipe. Check ingredients and steps carefully before saving. Ampleat matches the saved recipe against your pantry and checks current food restrictions when it is used."] },
      { title: "Delete from the library", paragraphs: ["Choose Delete saved recipe and confirm. Meals already in your plan and cooking history keep their recipe copies, so deleting or editing the library entry does not rewrite the exact version used for an earlier meal."] },
    ], related: ["recipe-library", "meal-history", "share-a-recipe"],
  },
  {
    slug: "share-a-recipe", category: "recipes", title: "Share a recipe link", description: "Send a readable recipe without sharing your account or pantry.", keywords: ["share", "link", "30 days", "expired", "public"],
    sections: [
      { title: "Create a recipe link", steps: ["Open a recipe in Recipes and choose Share recipe.", "Review the confirmation explaining who can read the link.", "Confirm and choose where to share the link using your device’s share options."] },
      { title: "What a recipient can see", paragraphs: ["Anyone with the link can read that shared recipe for 30 days. Your account details and pantry are not included. A recipe link is separate from a household invitation and does not give access to your shared kitchen."] },
      { title: "If a link does not open", paragraphs: ["Check that the full link was copied and that it has not expired. Ask the person sharing the recipe to create a fresh link. Creating a link requires a connection; retry when connected if sharing fails."] },
    ], related: ["recipe-library", "create-household", "privacy-and-data"],
  },
  {
    slug: "meal-history", category: "recipes", title: "Revisit cooking history and recipe versions", description: "See planned, cooked, skipped, and rejected meals with their recorded details.", keywords: ["history", "rating", "feedback", "exact version", "completed"],
    sections: [
      { title: "Open meal history", paragraphs: ["In Recipes, open meal history or switch the library view to history. Records include planned, cooked, skipped, and rejected meals. Open an entry to inspect the exact saved recipe version and its recorded outcome."] },
      { title: "Leave useful feedback", paragraphs: ["After cooking, you can confirm whether you cooked and ate the meal, rate it, choose feedback reasons, and optionally record the actual cooking time. Feedback stays attached to that recipe version. Skip for now is available when you do not want to leave feedback."] },
      { title: "History and learning", paragraphs: ["Completed outcomes can provide evidence for household memory suggestions. Suggestions require confirmation before affecting planning. Editing a recipe later does not change what you cooked in the past. A skipped or rejected suggestion is not proof that you ate or disliked a food permanently."] },
    ], related: ["confirm-cooking-usage", "memory-controls", "add-edit-recipes"],
  },
  {
    slug: "start-resume-cooking", category: "cooking", title: "Start, pause, and resume Cook Mode", description: "Cook one step at a time and pick up your saved progress deliberately.", keywords: ["start cooking", "resume", "pause", "session", "keep awake"],
    sections: [
      { title: "Start when you are ready", steps: ["Open a recipe and read its ingredients, equipment, and steps.", "Review missing ingredients. Confirm you have what is needed, adding missing stock to the pantry when appropriate.", "Tap Start cooking. Ampleat checks current household food restrictions before opening Cook Mode.", "Use Next step and Back to move through the recipe. Start step timers separately when you need them."] },
      { title: "Pause and return", paragraphs: ["Close Cook Mode to pause your work. Saved progress is tied to the current account and kitchen. Recipes shows a Cooking paused card; tap Resume cooking to continue. Opening Recipes, a widget, or a Live Activity does not automatically resume cooking."] },
      { title: "Check saved progress", paragraphs: ["If the app says progress could not be saved on this device, keep Cook Mode open until it can save. You can optionally keep the screen awake while cooking from Settings. Saved progress helps continuity, but the app does not promise full offline account access."] },
    ], related: ["cooking-timers", "cooking-guide", "confirm-cooking-usage"],
  },
  {
    slug: "cooking-timers", category: "cooking", title: "Use cooking timers", description: "Start, pause, and resume a timer without losing your place in a recipe.", keywords: ["timer", "countdown", "background", "notification", "alert"],
    sections: [
      { title: "Follow a timed step", steps: ["In Cook Mode, find a step with a Step timer.", "Tap Start to begin the countdown. Pause holds the remaining duration; Resume continues it.", "When you are ready, move to the next step. Review what you are doing before starting another timer."] },
      { title: "Get an optional alert", paragraphs: ["Enable Cook Mode timers in Settings and allow notification permission for alerts while the app is in the background. If scheduling an alert fails, the app tells you to keep Cook Mode open to follow the timer. Notification delivery depends on your device settings and installed build."] },
      { title: "Timers and saved sessions", paragraphs: ["Paused duration is preserved in the saved cooking session. Supported iPhone builds can also show a running timer in a cooking Live Activity when enabled. A timer is a cooking aid; it cannot establish whether food is ready or safe."] },
    ], related: ["notifications-and-timers", "iphone-live-activities", "start-resume-cooking"],
  },
  {
    slug: "cooking-guide", category: "cooking", title: "Ask the cooking guide a question", description: "Get help with the current recipe step, optionally including a photo you choose to send.", keywords: ["AI", "assistant", "technique", "question", "photo", "guide"],
    sections: [
      { title: "Ask about the current step", paragraphs: ["Open the guide from a cooking step and ask about an instruction, technique, or what you see. Suggested technique prompts can help you get started. The guide answers about the step; it does not move you through the recipe or change ingredients, timers, or household records."] },
      { title: "Send a photo deliberately", steps: ["Choose to attach a cooking photo and allow camera permission if asked.", "Take a still photo, review it, and remove it if you do not want to send it.", "Tap the send action to submit your question and attached photo. There is no continuous camera or audio recording."] },
      { title: "Understand the limits", paragraphs: ["Your question, relevant recipe information, recent conversation, and household food restrictions are sent to the AI provider. A photo is sent only when attached and submitted. The conversation clears when you leave the step; provider safety retention may apply. Answers can be wrong, and a photo cannot confirm allergens, freshness, internal temperature, or food safety. Requests can be limited or temporarily unavailable."] },
    ], related: ["start-resume-cooking", "privacy-and-data", "food-rules"],
  },
  {
    slug: "confirm-cooking-usage", category: "cooking", title: "Finish cooking and confirm ingredients used", description: "Update stock with the amounts you actually used, then optionally leave feedback.", keywords: ["complete", "deduct", "usage", "pantry", "finish", "rating"],
    sections: [
      { title: "Confirm what you used", steps: ["At the final step, tap Finish cooking.", "Review Confirm what you used. Edit the amounts to reflect your actual ingredient usage rather than an assumption.", "Tap Confirm usage & complete to record the meal and apply the confirmed pantry changes.", "Optionally leave a rating, feedback reasons, and the time the meal actually took."] },
      { title: "When pantry amounts change", paragraphs: ["Planning reserves ingredients but does not consume them. Opening a recipe or starting Cook Mode does not deduct stock. Confirmed completion records actual usage against the recorded inventory. If an amount is missing or uncertain, check the pantry rather than claiming stock that is not confirmed."] },
      { title: "If completion is interrupted", paragraphs: ["A retry of the same completed meal is guarded against duplicate deductions. Refresh and check the meal’s status and inventory history before making a separate manual adjustment. For planned prepared food, confirming the leftover meal uses its recorded portions rather than deducting raw ingredients again."] },
    ], related: ["meal-history", "plan-leftovers", "pantry-history"],
  },
  {
    slug: "grocery-list", category: "groceries", title: "Use your shared grocery list", description: "See what to buy, what to check at home, and which meals need each ingredient.", keywords: ["shopping", "groceries", "checklist", "reservations", "check the kitchen", "to buy"],
    sections: [
      { title: "Open your groceries", paragraphs: ["Use Groceries from Today or the grocery-list action in Your Plan. The list gathers needs across the saved plan and shows which meals each item is for. It distinguishes ingredients to buy from amounts you should first check in the kitchen."] },
      { title: "Work through the list", steps: ["Search for an item and use All or To do to change what is shown.", "Check uncertain stock in Kitchen before buying more.", "Tick an item when you want to mark the task done. Checkboxes are shared with the household.", "After shopping, record the actual purchase to update pantry stock."] },
      { title: "Why an item is still needed", paragraphs: ["Needs reflect confirmed amounts remaining after ingredients reserved for other planned meals. Unknown amounts may still require a check. Changing the plan recalculates needs. Checking an item off only changes its task status; it never creates pantry stock."] },
    ], related: ["record-grocery-purchases", "grocery-extras-sharing", "unknown-amounts"],
  },
  {
    slug: "grocery-extras-sharing", category: "groceries", title: "Add grocery extras and share your list", description: "Include coffee, snacks, and other household needs, then share outstanding tasks.", keywords: ["manual shopping", "extras", "share list", "remove", "all", "to do"],
    sections: [
      { title: "Add something outside the meal plan", steps: ["Open Groceries and find Other items.", "Tap the plus button, enter the item name and an amount or package note, and save.", "Tick it off as needed, or use its remove action if you no longer want it on the list."] },
      { title: "Share outstanding tasks", paragraphs: ["Use the grocery list’s share action to open your device’s share options. Shared text includes outstanding tasks and distinguishes items to check at home from items to buy. Checked items are excluded."] },
      { title: "A shared copy and a shared kitchen", paragraphs: ["A message containing your list is a copy of its current contents. Household members using Ampleat see the shared kitchen’s current task states after refreshing. A copied list does not grant household membership or update pantry amounts when someone shops."] },
    ], related: ["grocery-list", "record-grocery-purchases", "create-household"],
  },
  {
    slug: "record-grocery-purchases", category: "groceries", title: "Record groceries you bought", description: "Add newly purchased amounts after checking off your shopping tasks.", keywords: ["purchase", "restock", "bought", "scan groceries", "add stock"],
    sections: [
      { title: "Record what came home", steps: ["Use the purchase-recording entry from Groceries or Record groceries you bought in kitchen search.", "Photograph the foods and review them in purchase mode, or add them manually in Kitchen.", "Enter only the amount newly bought and check each match, storage location, and date.", "Confirm the batch to add the purchase to recorded stock."] },
      { title: "Avoid counting the same food twice", paragraphs: ["An observation updates a confirmed total; a purchase adds new food. Choose the operation that matches what happened. If the old amount is unknown, confirm the total or create a separate batch rather than adding to an invented amount."] },
      { title: "Checkboxes are separate", paragraphs: ["Marking a grocery task complete does not prove an item was purchased or how much you bought. Record the purchase explicitly so future plans can use accurate stock. If a save has an uncertain result, retry the same entry as offered by the app."] },
    ], related: ["vision-observation-purchase", "grocery-list", "add-pantry-items"],
  },
  {
    slug: "record-leftovers", category: "groceries", title: "Record leftovers and prepared food", description: "Track already-made food with portions, storage, and a use-by date you enter.", keywords: ["leftovers", "prepared food", "portions", "fridge", "freezer", "discard"],
    sections: [
      { title: "Add already-made food", steps: ["Open Groceries and find Leftovers under Prepared food.", "Choose Add leftovers or the plus button.", "Enter the food name, available portions, stored-on date, and your use-by date. Choose Fridge or Freezer.", "Save the record. You can record 1 to 24 available portions."] },
      { title: "Keep portions current", paragraphs: ["Use Used up when the prepared food is gone, or Discarded when it should no longer be available. These actions keep it from continuing to appear as available food."] },
      { title: "Dates come from you", paragraphs: ["Enter a date appropriate to the food and its actual storage. Ampleat does not infer safe storage life. Food past your recorded use-by date is not offered for planning; food within that date still needs your own suitability check."] },
    ], related: ["plan-leftovers", "pantry-dates", "food-rules"],
  },
  {
    slug: "plan-leftovers", category: "groceries", title: "Add leftovers to a meal", description: "Plan prepared portions without reserving them twice or reusing raw ingredients.", keywords: ["prepared", "leftover meal", "servings", "finish", "suitability"],
    sections: [
      { title: "Choose portions and a day", steps: ["In Groceries → Leftovers, open an available food and choose Plan a meal.", "Select the portions to use and a date, then tap Preview meal.", "Choose the meal type and confirm that you checked the ingredients and storage and that the food is suitable for everyone eating.", "Review the proposal and save it."] },
      { title: "Portions have to be available", paragraphs: ["Ampleat accounts for portions already reserved by other planned meals. You cannot plan the same available portion twice. Prepared food past your recorded use-by date is not offered for planning."] },
      { title: "Confirm when it is used", paragraphs: ["On the planned day, confirm the leftover meal from its meal card. This records the prepared-food portions being used. It does not deduct the raw recipe ingredients a second time. Mark remaining prepared food Used up or Discarded when appropriate."] },
    ], related: ["record-leftovers", "confirm-cooking-usage", "plan-a-meal"],
  },
  {
    slug: "create-household", category: "household", title: "Create a household and invite someone", description: "Share your existing kitchen with people using their own approved accounts.", keywords: ["family", "organizer", "invite", "24 hours", "eight", "members"],
    sections: [
      { title: "Create your household", steps: ["Open Your household from Today or Settings.", "Enter a household name and choose Create your household.", "As organizer, create an invitation code and use Share invitation to send it yourself.", "Ask the recipient to open Your household in their own approved Ampleat account and paste the complete invitation."] },
      { title: "What you are sharing", paragraphs: ["Creating a household shares your existing kitchen records, including pantry, recipes, meal plans, shopping, prepared food, cooking history, feedback, and memory. Each person keeps a separate account. A shared kitchen supports up to eight member accounts."] },
      { title: "Invitation rules", paragraphs: ["A household invitation is single-use and expires after 24 hours. It includes the organizer identifier and code; the recipient needs the complete text. Invitations are not sent automatically, and a household invite does not grant private-beta approval."] },
    ], related: ["join-household", "household-sharing", "leave-household"],
  },
  {
    slug: "join-household", category: "household", title: "Join a household", description: "Accept sharing and open the organizer’s kitchen without deleting your personal records.", keywords: ["invitation", "join", "code", "consent", "personal kitchen"],
    sections: [
      { title: "Accept an invitation", steps: ["Sign in with your own verified, approved beta account.", "Open Your household from Settings or Today.", "Paste the complete invitation shared by the organizer, including both parts separated by a colon.", "Review the sharing explanation, agree to share kitchen activity, and tap Join your kitchen."] },
      { title: "What happens to your records", paragraphs: ["Joining opens the organizer’s existing kitchen. Your personal kitchen records stay in your account and are available again if you leave. Joining does not automatically merge those records into the shared pantry or plan. Your recorded firm food restrictions apply to shared recommendations."] },
      { title: "If the invitation fails", paragraphs: ["Check that you copied the complete invitation and that it has not expired or already been used. Ask the organizer for a fresh code. Confirm your own beta approval separately; creating an account or receiving a household code is not enough to enter the private beta."] },
    ], related: ["household-sharing", "leave-household", "beta-access"],
  },
  {
    slug: "household-sharing", category: "household", title: "What your household shares", description: "Understand shared activity, private account details, and combined food rules.", keywords: ["privacy", "shared pantry", "family", "restrictions", "children", "guests"],
    sections: [
      { title: "One kitchen, separate accounts", paragraphs: ["Members work with the organizer’s pantry, meal plan, recipes, shopping, prepared food, history, feedback, and kitchen memory. Your personal account settings and support records remain private. Shared activity can be seen by other household members."] },
      { title: "Whose preferences apply?", paragraphs: ["Each member records their own allergies, religious restrictions, and absolute exclusions. Ampleat combines those firm restrictions for shared recommendations. The organizer’s equipment, cooking time, and servings provide shared defaults. Include restrictions for children or guests without accounts in the organizer’s food rules."] },
      { title: "Coordinate changes", paragraphs: ["Meal changes are previewed before confirmation, and shared stock edits are checked against the current record. If another person updates the kitchen first, refresh before retrying. Changes to firm rules can flag affected planned meals for review; check them before cooking."] },
    ], related: ["food-rules", "memory-controls", "connection-and-sync"],
  },
  {
    slug: "leave-household", category: "household", title: "Leave, remove a member, or close a household", description: "Know where shared kitchen records stay when membership changes.", keywords: ["leave", "remove member", "close household", "organizer", "delete"],
    sections: [
      { title: "Leave as a member", steps: ["Open Your household and choose Leave this household.", "Read the confirmation and choose Leave.", "You return to your personal kitchen records. The organizer keeps the shared records."] },
      { title: "Organizer controls", paragraphs: ["The organizer can remove members from the member list. To close the shared household, remove other members or ask them to leave first, then use Close this household. The organizer’s kitchen records remain in their account."] },
      { title: "After access changes", paragraphs: ["Refresh the app before continuing kitchen work. A screen opened under the old household cannot save a change into a different kitchen after membership changes. Signing out or leaving also clears shared widget snapshots on supported builds. Deleting an account is a separate, permanent action; organizers should review its shared-kitchen consequences first."] },
    ], related: ["household-sharing", "delete-account", "iphone-widgets"],
  },
  {
    slug: "how-intelligence-works", category: "memory", title: "How Ampleat Intelligence finds a meal", description: "Understand the ingredients and preferences behind a suggestion.", keywords: ["AI", "recommendation", "generation", "ranking", "why this meal", "learning"],
    sections: [
      { title: "Start with your kitchen", paragraphs: ["Ampleat considers saved recipes and starting recipes alongside recorded ingredients, approaching recorded dates, time, equipment, servings, variety, favorites, and confirmed preferences. It coordinates ingredients across the plan rather than treating each meal as an unrelated suggestion."] },
      { title: "When a new idea is needed", paragraphs: ["If saved and starting recipes do not fit, planning can request a new AI-generated candidate. Food rules and practical checks still apply. A candidate is shown for review; it does not silently replace your meal. Some planning can use saved recipes without generation, while shared changes still require a connection."] },
      { title: "Your judgment stays part of the process", paragraphs: ["Read Why this meal and the ingredient list. Missing or uncertain stock can affect feasibility. Generated ideas and cooking guidance can be wrong. Ampleat is not a medical nutrition optimizer or a source of verified live grocery prices, and a restriction check cannot verify the label on a physical product."] },
    ], related: ["memory-controls", "food-rules", "suggestion-troubleshooting"],
  },
  {
    slug: "memory-controls", category: "memory", title: "Review and control household memory", description: "Confirm, edit, dismiss, pause, or forget learned preferences.", keywords: ["learn", "memory", "pause", "reset", "evidence", "forget", "preference"],
    sections: [
      { title: "Review a suggestion", steps: ["Open Settings → Household memory.", "Read the suggested preference and choose See what this is based on to inspect its cooking outcomes.", "Edit preferred minutes or default servings when the suggestion allows it.", "Choose Use this preference to confirm it, or Dismiss to set it aside."] },
      { title: "Change what is used", paragraphs: ["Only confirmed preferences affect planning. For an existing preference, use Save preference after editing or Stop using it to dismiss it. Repeated cooking feedback can suggest practical defaults, but changing a single meal does not create a lasting dislike. Memory never relaxes firm food rules."] },
      { title: "Pause or reset learning", paragraphs: ["Turn off Learn from your cooking to stop new suggestions; existing confirmed preferences remain available. Forget learned preferences clears confirmed, suggested, and dismissed memory for everyone in the kitchen after confirmation. Older feedback will not recreate cleared memory, but future cooking feedback can create new suggestions."] },
    ], related: ["meal-history", "household-sharing", "cooking-profile"],
  },
  {
    slug: "suggestion-troubleshooting", category: "memory", title: "When Ampleat cannot find the right meal", description: "Check constraints, pantry amounts, and connectivity before trying another suggestion.", keywords: ["generation failed", "rejected", "no meal", "not enough", "quota", "loading"],
    sections: [
      { title: "Check practical constraints", paragraphs: ["A meal can be unavailable because it conflicts with firm food rules, equipment, time, supported units, or confirmed pantry amounts. Ampleat should not relax a firm restriction just to produce a result."] },
      { title: "Try a useful adjustment", steps: ["Check your profile’s equipment, servings, and time for accuracy.", "Confirm unknown or incorrect pantry quantities and make sure units match what you actually have.", "If appropriate, allow extra groceries or choose a different available recipe.", "Use Suggest something else with a clear direction. Keep allergies and absolute exclusions accurate."] },
      { title: "If the request fails or the preview expires", paragraphs: ["Check your connection and try again from the current plan. AI features may have usage limits or be temporarily disabled during beta. An old preview may need replacing after a household update. A loading indicator or failed request is not a saved plan; wait for the explicit success state before relying on a change."] },
    ], related: ["unknown-amounts", "food-rules", "connection-and-sync"],
  },
  {
    slug: "cooking-profile", category: "settings", title: "Change your cooking profile", description: "Update servings, time, cuisines, equipment, and everyday preferences.", keywords: ["settings", "diet", "confidence", "custom", "dislikes", "household size"],
    sections: [
      { title: "Edit your profile", steps: ["Open Settings and tap Edit in Cooking profile, or choose a row under Cooking preferences.", "Update household servings, cooking confidence, typical time, days you cook, or meals you usually skip.", "Edit favorite cuisines, available equipment, dietary preferences, or disliked ingredients. Custom entries are supported.", "Tap Save preferences."] },
      { title: "Preferences and firm rules", paragraphs: ["Dietary preferences and dislikes help steer recommendations. Allergies, religious restrictions, and absolute exclusions are separate firm rules. Put an ingredient that must never be recommended in the appropriate firm-rule field rather than relying on a dislike."] },
      { title: "Shared defaults", paragraphs: ["For a shared kitchen, the organizer’s equipment, time, and serving count supply shared defaults. Members keep their own restrictions. Profile changes affect future recommendations, and changed restrictions can require reviewing meals already planned."] },
    ], related: ["food-rules", "household-sharing", "memory-controls"],
  },
  {
    slug: "food-rules", category: "settings", title: "Set allergies and firm food restrictions", description: "Keep absolute exclusions separate from preferences and review meals before cooking.", keywords: ["allergy", "allergens", "religious", "halal", "kosher", "exclusions", "safety"],
    sections: [
      { title: "Save firm rules in your profile", steps: ["Open Settings → Dietary rules or edit Cooking profile.", "Record allergies and intolerances, religious restrictions, and any other absolute exclusions in their separate fields.", "Save, then review planned meals flagged by the change before cooking."] },
      { title: "Everyone at the table matters", paragraphs: ["Shared recommendations use the recorded firm restrictions of household members. Include children and guests without accounts in the organizer’s restrictions. Memory, a one-time request, and a craving cannot override those rules."] },
      { title: "Check the actual food", paragraphs: ["Ampleat’s software checks have limits and do not establish product allergen contents, cross-contact, medical suitability, freshness, or safe internal temperature. Review physical labels, substitutions, equipment, and preparation yourself. Photos cannot make those checks for you. The app’s Allergy & Cooking Safety page explains these limitations."] },
    ], related: ["cooking-profile", "cooking-guide", "household-sharing"],
  },
  {
    slug: "notifications-and-timers", category: "settings", title: "Manage reminders, haptics, and screen settings", description: "Choose the optional cues that make cooking and pantry checks easier.", keywords: ["notifications", "permission", "expiration", "haptics", "awake", "accessibility"],
    sections: [
      { title: "Choose your reminders", steps: ["Open Settings → Notifications.", "Turn on Expiration reminders for optional reminders about recorded food dates.", "Turn on Cook Mode timers for timer notifications and allow your device’s notification permission when requested.", "If permission was previously denied, update it in your device’s settings."] },
      { title: "Make cooking comfortable", paragraphs: ["Under Your experience, Haptic feedback controls subtle cues for selections and finished timers. Keep screen awake while cooking applies only while Cook Mode is open. These preferences are saved for your signed-in account on the current device."] },
      { title: "Optional by design", paragraphs: ["Ampleat remains usable without notification permission. Background alert delivery depends on your device and build; keep Cook Mode open if an alert could not be scheduled. The app respects system Reduce Motion and Reduce Transparency settings, and cooking instructions can scroll for larger text."] },
    ], related: ["cooking-timers", "iphone-widgets", "start-resume-cooking"],
  },
  {
    slug: "iphone-widgets", category: "settings", title: "Set up iPhone Home Screen widgets", description: "Choose whether meal and grocery snapshots can appear outside the app.", keywords: ["iOS", "widget", "home screen", "last synced", "privacy", "expo go"],
    sections: [
      { title: "Use a compatible Ampleat build", paragraphs: ["Ampleat Today and Ampleat Groceries widgets are included in compatible installed iPhone builds. They are not supplied by Expo Go or the browser preview. If they are missing, check that you have a build with the widget extension."] },
      { title: "Enable sharing deliberately", steps: ["Open Settings → Ampleat on your iPhone.", "Enable Share kitchen with widgets. It is off by default.", "Add Ampleat Today or Ampleat Groceries using your iPhone’s Home Screen widget controls. Small and medium sizes are supported."] },
      { title: "Know what is displayed", paragraphs: ["Snapshots include meal titles and grocery items, not account information or dietary restrictions. They can be visible to someone looking at your device. Last synced shows the actual refresh time; remote household changes appear after Ampleat refreshes. Turn sharing off, sign out, or leave the household to replace shared snapshots with generic content."] },
    ], related: ["iphone-live-activities", "siri-shortcuts", "privacy-and-data"],
  },
  {
    slug: "iphone-live-activities", category: "settings", title: "Show cooking on your iPhone Lock Screen", description: "Use Live Activities for the current recipe, step, and running timer on supported builds.", keywords: ["live activity", "dynamic island", "lock screen", "iOS", "countdown"],
    sections: [
      { title: "Enable cooking Live Activities", steps: ["Use a compatible installed Ampleat iPhone build; the feature is not available in Expo Go or the browser preview.", "Open Settings → Ampleat on your iPhone and enable Cooking Live Activities.", "Explicitly start or resume Cook Mode. The recipe, current step, and running timer can appear on the Lock Screen and supported Dynamic Island."] },
      { title: "Return to the recipe", paragraphs: ["Tap the activity to open Recipes, then choose Resume cooking. Opening from the Lock Screen does not start cooking on its own. The app maintains one cooking activity and updates it as your step or timer changes."] },
      { title: "When it ends", paragraphs: ["Finishing cooking, disabling Live Activities, signing out, or changing household ends the activity. Closing Cook Mode keeps it only while a timer continues. Device support and system permissions affect whether it appears; activity text can be visible on your Lock Screen."] },
    ], related: ["cooking-timers", "start-resume-cooking", "iphone-widgets"],
  },
  {
    slug: "siri-shortcuts", category: "settings", title: "Open kitchen tasks with Siri and Shortcuts", description: "Navigate to meals, groceries, scans, or an ingredient search with your voice.", keywords: ["Siri", "shortcuts", "voice", "hands free", "iPhone", "intents"],
    sections: [
      { title: "Set up supported shortcuts", paragraphs: ["Use a compatible installed Ampleat iPhone build and open Settings → Widgets, Siri & Shortcuts for setup help. The app-owned Siri integration is not included in Expo Go or a browser preview."] },
      { title: "Things you can open", paragraphs: ["Shortcuts cover today’s meals, your meal plan, the grocery list, your kitchen, upcoming recorded food dates, kitchen scanning, purchase recording, and barcode scanning. Ingredient prompts can find recipes using an ingredient or search for a food in pantry records. Include “in Ampleat” in the phrase, such as “Open my grocery list in Ampleat.”"] },
      { title: "You still confirm changes", paragraphs: ["Siri opens a task and may wait for sign-in or an open sheet to finish. It does not silently add stock, mark food safe, change a meal, or start cooking. If a shortcut is unavailable, open the same task directly from the app and check your installed build."] },
    ], related: ["search-your-kitchen", "iphone-widgets", "record-grocery-purchases"],
  },
  {
    slug: "beta-access", category: "account", title: "Get into the private beta", description: "Understand invitations, email verification, and account approval.", keywords: ["sign up", "approved tester", "invitation required", "access", "verify email", "free"],
    sections: [
      { title: "Before you can enter", steps: ["Request early access through the Ampleat website.", "Create an account using the email approved for the beta.", "Verify your email using the verification message, then return to the app.", "Let Ampleat check the invitation, or tap Check again after approval."] },
      { title: "Invitation required", paragraphs: ["A verified account can still be waiting for beta approval. Check the email shown on the access screen. Use another account if the invitation belongs to a different email, or contact support if you believe approval is missing. A household invitation code does not grant beta approval."] },
      { title: "Current availability", paragraphs: ["The private beta is free and invitation-only. Public enrollment and paid checkout are not open by default. Beta features can change or be temporarily limited. You can contact support before entering the kitchen, and account deletion does not require tester approval."] },
    ], related: ["sign-in-recovery", "first-time-setup", "membership"],
  },
  {
    slug: "sign-in-recovery", category: "account", title: "Sign in, verify email, or reset a password", description: "Recover account access and handle an expired reset link.", keywords: ["login", "forgot password", "Google", "Apple", "verification", "password reset"],
    sections: [
      { title: "Use the right account", paragraphs: ["Sign in using your account email and password, or an offered Google or Apple sign-in option supported by your build. Verify the email where required, then complete the beta access check. Social sign-in availability depends on your installed app configuration."] },
      { title: "Reset an email-account password", steps: ["Choose the forgotten-password option from sign-in and request a reset email.", "Open the reset link, enter and confirm a new password, and save.", "Use at least eight characters with an uppercase letter, a number, and a special character.", "Return to sign-in with the new password. If the link is expired or already used, request a fresh one."] },
      { title: "Still cannot enter?", paragraphs: ["Check the account email, network connection, email verification, and beta approval separately. Password recovery does not grant tester approval. If you normally use a social sign-in provider, use that provider’s account-recovery options as appropriate. Contact support with the screen message if the issue persists."] },
    ], related: ["beta-access", "connection-and-sync", "contact-support"],
  },
  {
    slug: "membership", category: "account", title: "Understand Individual and Household membership", description: "See what the free beta offers and how membership choices are prepared for launch.", keywords: ["subscription", "price", "paid", "billing", "restore", "cancel", "monthly", "annual"],
    sections: [
      { title: "The private beta stays free", paragraphs: ["Open Settings → Intelligence membership to review Individual and Household choices. During the free beta, Save my launch preference records the option you prefer; it is not a purchase and does not start a subscription. Launch prices are not established by this preference."] },
      { title: "Which plan is for whom?", paragraphs: ["Individual is designed to cover one adult’s Intelligence access. Household is designed for the organizer to cover one shared kitchen with up to eight member accounts. Children and guests can be included in servings and food rules without separate member accounts. Household membership and a household invitation serve different purposes."] },
      { title: "When paid checkout is available", paragraphs: ["Configured releases show actual store pricing and available billing intervals. Review the store confirmation for price, renewal, taxes, and trial terms. Manage subscription and Restore purchases appear when applicable. Someone already covered by the organizer’s Household plan does not need a second membership. Deleting an Ampleat account does not cancel a store subscription; manage cancellation through the store."] },
    ], related: ["create-household", "beta-access", "delete-account"],
  },
  {
    slug: "privacy-and-data", category: "account", title: "Your data and privacy controls", description: "Understand shared records, photo processing, memory, and data requests.", keywords: ["privacy", "export", "data", "AI provider", "retention", "consent", "photos"],
    sections: [
      { title: "Choose what is shared", paragraphs: ["Joining a household requires sharing consent for kitchen activity. Account settings and support records remain private. You can edit pantry data and preferences, control household memory, leave a household, disable widget sharing, or delete your account."] },
      { title: "AI and photos", paragraphs: ["Recommendations use relevant pantry and preference information. Vision and receipt analysis send the submitted photo to the AI service. The cooking guide sends your submitted question, relevant recipe context, recent conversation, and food restrictions; photos are included only when you explicitly send them. Scan photos are not stored in pantry records. Provider safety retention may still apply."] },
      { title: "Data requests during beta", paragraphs: ["For an account-data export or another privacy request, contact hello@ampleat.com. The current beta Settings screen does not expose an export button, so do not look for a download control that is not there. Review the website Privacy Policy for published terms and contact support for details about your current build’s shared-kitchen records."] },
    ], related: ["memory-controls", "household-sharing", "delete-account"],
  },
  {
    slug: "delete-account", category: "account", title: "Delete your Ampleat account", description: "Review permanent deletion and its consequences for a shared kitchen.", keywords: ["delete", "remove account", "permanent", "retention", "subscription", "sign out"],
    sections: [
      { title: "Before deleting", paragraphs: ["Deletion permanently removes your live account and associated personal kitchen records, preferences, saved recipes, and meal history. It cannot be undone. In a household, shared records belong to the organizer’s kitchen. Review household access and keep anything you need before deleting an organizer account. Limited backups and operational records follow the published retention policy."] },
      { title: "Confirm deletion", steps: ["Open Settings → Account → Delete account and read both confirmation prompts.", "Sign in again if a recent sign-in is required, then retry the deletion.", "If beta access is unavailable, use Delete your account on the access screen. That route asks you to type DELETE and requires a sign-in within the last five minutes."] },
      { title: "Subscriptions are managed separately", paragraphs: ["Deleting your app account does not cancel an App Store or Google Play subscription. If you have one, manage it through the store. Signing out merely ends your session and does not delete your account."] },
    ], related: ["leave-household", "privacy-and-data", "membership"],
  },
  {
    slug: "connection-and-sync", category: "account", title: "Connection, refresh, and saving problems", description: "Know when information may be stale and recover without duplicating a change.", keywords: ["offline", "sync", "network", "retry", "refresh", "save failed", "loading"],
    sections: [
      { title: "Refresh your kitchen", paragraphs: ["Pull down on Today or Your Plan to request fresh information. If a screen fails to load, use Try again. An offline banner means loaded records may be stale and saving shared changes requires a connection."] },
      { title: "A failed request is not a saved change", steps: ["Read the visible error and reconnect before retrying.", "If a save may have reached the service, use the app’s retry for the same entry or batch.", "Refresh and check the latest plan, pantry, or inventory history before making an additional adjustment.", "If a proposal expired or another household member changed the source data, request a fresh preview."] },
      { title: "What can continue", paragraphs: ["A saved cooking session and recipe snapshot help you resume progress, but full offline account access is not implemented. Do not rely on unsaved shared mutations being queued in the background. Native widgets show snapshots and a Last synced time; they are not proof that the latest remote change has arrived."] },
    ], related: ["lock-and-undo", "pantry-history", "contact-support"],
  },
  {
    slug: "contact-support", category: "account", title: "Get help or report a problem", description: "Send the details that help us understand what happened.", keywords: ["support", "email", "bug", "feedback", "research", "contact", "help"],
    sections: [
      { title: "Contact Ampleat", paragraphs: ["Email hello@ampleat.com or use the website’s Contact support page. In the app, Settings → Contact support opens email. You can ask for help before completing signup or beta approval."] },
      { title: "Help us reproduce the problem", steps: ["Describe what you tried, what you expected, and what actually happened.", "Include the steps to reproduce, the screen’s error message, your device, and the Ampleat version shown in Settings.", "Mention whether the issue blocks you, concerns a food rule, or happened in a shared household. Do not include passwords or invitation codes."] },
      { title: "Feedback during the private beta", paragraphs: ["Some in-app feedback and tester-research controls are paused in the current beta. Use email or the website support form when those controls are absent. Help Center instructions describe the current mobile source; installed builds and remotely available features can differ."] },
    ], related: ["connection-and-sync", "beta-access", "scan-troubleshooting"],
  },
];

export const featuredHelpSlugs = ["first-time-setup", "plan-a-meal", "scan-with-ampleatvision", "start-resume-cooking"];

export function getHelpArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}

export function getHelpCategory(id: string) {
  return helpCategories.find((category) => category.id === id);
}

export function searchHelp(query: string, category = "all") {
  const normalize = (value: string) => value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  const stopWords = new Set(["a", "an", "the", "my", "your", "our", "i", "me", "to", "how", "do", "does", "can", "is", "in", "of", "and"]);
  const terms = normalize(query).split(/[^a-z0-9]+/).filter((term) => term && !stopWords.has(term));
  return helpArticles.filter((article) => {
    if (category !== "all" && article.category !== category) return false;
    const text = [article.title, article.description, getHelpCategory(article.category)?.title, ...article.keywords,
      ...article.sections.flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.steps ?? []), section.note ?? ""]),
    ].join(" ");
    return terms.every((term) => normalize(text).includes(term));
  }).map((article) => ({
    article,
    score: terms.reduce((score, term) => score
      + (normalize(article.title).includes(term) ? 8 : 0)
      + (normalize(article.description).includes(term) ? 4 : 0)
      + (article.keywords.some((keyword) => normalize(keyword).includes(term)) ? 3 : 0), 0),
  })).sort((a, b) => b.score - a.score).map(({ article }) => article);
}
