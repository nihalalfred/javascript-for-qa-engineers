/**
 * LOGICAL OPERATORS
 * 
 * && (AND)
 * 
 * || (OR)
 * 
 * These are used to combine multiple conditions, usually within an if statement or a while loop.
 * 
 */

/**
 * && (AND)
 * The "Strict" operator. 
 * Both sides must be true.
 */

let hasItemsInCart = false;
let isUserLoggedIn = true;

// Both must be true to proceed to checkout
if (hasItemsInCart && isUserLoggedIn) {
    console.log("✅ Proceeding to Checkout...");
} else {
    console.error("❌ Action Blocked: You must be logged in with items in your cart.");
}

/**
 * || (OR)
 * The "Flexible" operator. 
 * Only one side needs to be true.
 */

let isPaymentViaCard = true;
let isPaymentViaUPI = false;

// Either payment method is fine
if (isPaymentViaCard || isPaymentViaUPI) {
    console.log("✅ Payment Method Accepted.");
} else {
    console.warn("⚠️ Please select a valid payment method.");
}

// Combining both

let isAdmin = false;
let hasPermission = true;
let isAccountActive = false;

// (Either you are an admin OR you have permission) AND your account must be active
if ((isAdmin || hasPermission) && isAccountActive) {
    console.log("🔓 Access Granted to Dashboard");
} else {
    console.error("🔒 Access Denied");
}
