# Algolia TAM Assignment 
  
This is the hiring assignment for the TAM Team at Algolia. It’s intended to mimic work you might do here, while giving us an understanding of your skills in:  
  
* Coding
* Problem Solving
* Communication
  
If you want to know how we will judge the assignment, you can view our scoring rubric.  
  
## Brief
Spencer and Williams have provided us with raw product data and a repo of their front end code. They have asked us for help to enhance their implementation and have asked that we create an Algolia application to demonstrate this to them.

### Technical Assignment - Part One (1 hrs)
Spencer and Williams are having a sale on Cameras. They would like you create and run a demo script that reduces the price of everything in the camera category by 20% and then round to the lowest full number. They have provided the raw data as products.json . The data should be transformed and sent to algolia in a single script.  

>For part one of this assignment, I created a NodeJS script (upload_data.js) that parses products.json and alters the price for each item in the specified category based on deduction percentage. Finally, the script sends the data to Algolia.
>
>I've added in a few command line options that will allow the user to:
>
>1. Specify the file path to a JSON data file the user intends to upload (-f, --file)
>2. Change the category string to a specific category of items to put on sale (-c, --category)
>3. Change the percentage of price reduction for the specified category (-p, --percent-reduction)
>4. Optionally set index settings for relevance (see part three) (-s, --set-settings)
>
>Potential Improvements:
>
>1. I would like to add another command line argument that clears or deletes the Algolia index before uploading data, so that each time the script is run, a new dataset can be uploaded.
>2. Add another feature to allow a sale to be processed on products based on other data points, such as current price or rating.
>3. Implement further error checking for each added command line argument, such as only allowing valid categories that are included in the dataset, ensuring the specified file path is valid, etc.

### Technical Assignment - Part Two (2 hrs)
Our customer Spencer and Williams want to use Personalisation in order to to do this they need to implement **_Algolia Insights_** . They have asked for us to create a demo of the events included in their provided codebase.  
  
It is imperative that we send clicks and conversion on the result page hit results, any other events included will be a bonus.  

>For part two of this assignment, I was able to implement _Algolia Insights_ to track user clicks and conversions on the Spencer & Williams results page. For our purposes, I tied the 'click' event to the View button, and the 'conversion' event to the 'Add To Cart' button. When a user clicks on one of these buttons, a click or conversion event is sent to Algolia.
>
>Potential Improvements:
>
>1. Perhaps it would be useful to order items that are displayed to users based on average click/conversion rate amongst all users.
>2. We could also add a front-end feature that could tell the users about popular items (based on clicks/conversions) in their area, demographic, etc.
  
### Technical Assignment - Part Three (0.5 hrs)
Spencer and Williams want some guidance on their optimal relevance set up. In the Algolia index that you have uploaded the data and events to, configure the relevance so that when users are searching they are seeing the results that make most sense. 

>For part three of this assignment, I utilized the Algolia dashboard to configure the results page for optimal relevance. This allowed me to learn more about how products show up in the results page, and how changing these options affected search results. I was also able to configure the facets feature, allowing users to filter results based on product brand and categories. Then, I implemented a flag (-s) within the upload_data.js script to allow the user to set these settings programmatically through the command line.
>
>Potential Improvements:
>
>1. Our client would like to use Personalization to better display results for their users. The Alogolia Personalization feature is not included in my current plan, but I believe this would be a critical feature to implement in this application to ensure client success.
>2. Create a search bar for each facet, so that the user could search for brands or categories not immediately displayed.

### Questions (0.5 hrs)
  
Please answer example customer questions in the questions directory.  
  
## Getting started
  
1. You'll need to sign up for an Algolia account @ https://www.algolia.com/users/sign_up.  
2. You can find the product dataset in the data folder inside this repo. Feel free to use any language to perform the data transformation  
3. To run the front end of the application you will need to add your app id, api key and index name to the file .env.test and rename it .env. Once added run `npm install` & `npm start` to see the UI  
  
Everything you need to complete this assignment can be found on algolia.com/docs.  
  
## How to submit
1. Push your code into a code sandbox and share it with us  
2. Reply to our email with a link to your code sandbox, and anything else you think is applicable  
  
## Scoring Rubric
  
### Technical Assignment
  
| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Follow the instructions of the assignment? | | |
| Write code that follows best-practices? | | |
| Avoid over-engineering? | | |
| Demonstrate understanding of the code they wrote? | | |
| Demonstrate good code and process organization? | | |
| Complete the assignment in an efficient manner? | | |
| Ask for clarification when necessary? | | |
  
### “Customer” Questions

| Did the candidate: | Yes | No |
| :------------- | :------------- | :------------- |
| Answer the questions correctly? | | |
| Answer in a succinct manner? | | |
| Have minimal spelling, grammar, or formatting mistakes? | | |
| Employ a friendly, helpful tone? | | | |

### Overall Impressions

| Does the candidate demonstrate being in the top 10% of: | Yes | No |
| :------------- | :------------- | :------------- |
| Technical aptitude | | |
| Problem Solving | | |
| Communication skills | | | |
