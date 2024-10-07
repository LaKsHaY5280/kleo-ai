// import { client } from "@/lib/prisma";
// import { currentUser } from "@clerk/nextjs";
// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET!, {
//   typescript: true,
//   apiVersion: "2024-06-20",
// });

// export async function GET() {
//   try {
//     const user = await currentUser();
//     if (!user) return new NextResponse("User not authenticated");

//     const account = await stripe.accounts.create({
//       country: "IN", // Changed from "US" to "IN"
//       type: "custom",
//       business_type: "company",
//       capabilities: {
//         card_payments: {
//           requested: true,
//         },
//         transfers: {
//           requested: true,
//         },
//       },
//       external_account: "btok_in", // Updated external account to reflect India
//       tos_acceptance: {
//         date: 1547923073,
//         ip: "172.18.80.19",
//       },
//     });

//     if (account) {
//       const approve = await stripe.accounts.update(account.id, {
//         business_profile: {
//           mcc: "5045", // Ensure this MCC is valid for India
//           url: "https://bestcookieco.com",
//         },
//         company: {
//           address: {
//             city: "Mumbai", // Updated city to Mumbai
//             line1: "123 State St", // Update as necessary
//             postal_code: "400001", // Updated postal code for India
//             state: "MH", // Updated state code for Maharashtra
//           },
//           tax_id: "000000000", // Update with a valid Indian tax ID
//           name: "The Best Cookie Co",
//           phone: "+91 8888675309", // Updated phone format for India
//         },
//       });
//       if (approve) {
//         const person = await stripe.accounts.createPerson(account.id, {
//           first_name: "Jenny",
//           last_name: "Rosen",
//           relationship: {
//             representative: true,
//             title: "CEO",
//           },
//         });
//         if (person) {
//           const approvePerson = await stripe.accounts.updatePerson(
//             account.id,
//             person.id,
//             {
//               address: {
//                 city: "victoria ",
//                 line1: "123 State St",
//                 postal_code: "V8P 1A1",
//                 state: "BC",
//               },
//               dob: {
//                 day: 10,
//                 month: 11,
//                 year: 1980,
//               },
//               ssn_last_4: "0000",
//               phone: "8888675309",
//               email: "jenny@bestcookieco.com",
//               relationship: {
//                 executive: true,
//               },
//             },
//           );
//           if (approvePerson) {
//             const owner = await stripe.accounts.createPerson(account.id, {
//               first_name: "Kathleen",
//               last_name: "Banks",
//               email: "kathleen@bestcookieco.com",
//               address: {
//                 city: "victoria ",
//                 line1: "123 State St",
//                 postal_code: "V8P 1A1",
//                 state: "BC",
//               },
//               dob: {
//                 day: 10,
//                 month: 11,
//                 year: 1980,
//               },
//               phone: "8888675309",
//               relationship: {
//                 owner: true,
//                 percent_ownership: 80,
//               },
//             });
//             if (owner) {
//               const complete = await stripe.accounts.update(account.id, {
//                 company: {
//                   owners_provided: true,
//                 },
//               });
//               if (complete) {
//                 const saveAccountId = await client.user.update({
//                   where: {
//                     clerkId: user.id,
//                   },
//                   data: {
//                     stripeId: account.id,
//                   },
//                 });

//                 if (saveAccountId) {
//                   const accountLink = await stripe.accountLinks.create({
//                     account: account.id,
//                     refresh_url:
//                       "http://localhost:3000/callback/stripe/refresh",
//                     return_url: "http://localhost:3000/callback/stripe/success",
//                     type: "account_onboarding",
//                     collection_options: {
//                       fields: "currently_due",
//                     },
//                   });

//                   // Create a payment intent with a description
//                   const paymentIntent = await stripe.paymentIntents.create({
//                     amount: 9900,
//                     currency: "usd",
//                     payment_method: "pm_1Px7ewSJkXtetQzYClm4fCoO", // Example payment method ID
//                     description: "Export transaction for goods", // Added description for compliance
//                     confirm: true,
//                   });

//                   return NextResponse.json({
//                     url: accountLink.url,
//                     paymentIntent, // Return the payment intent details if needed
//                   });
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   } catch (error) {
//     console.error(
//       "An error occurred when calling the Stripe API to create an account:",
//       error,
//     );
//   }
// }
