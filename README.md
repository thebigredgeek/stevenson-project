Two types of companies where you can work:

1. Product company - Engineers are seen as value drivers.  Software is the product.  Often funded by VCs.  Pay very well
2. Something else - Banks, hospitals, government.  Engineers are seen as cost drivers.  Pay crap


Lifecycle:

1. A couple founders have an idea.  Business founder + tech founder (+ optional design founder).
2. Founders build the solution quick n dirty as fast as humanly possible with the smallest set of features possible.  Called an MVP, or minimum viable product.  GOAL: Find something that addresses a large market.
3. Raise capital... seed round.
4. Iterate, iterate, iterate.  Finding product-market fit.
5. Raise series A.  Raise series B.

Product thesis: A secure chat application that allows users to chat with co-workers, based on work email.  

Product Requirements Doc:

User Stories:
1. As a user, I can register in the application using my work email address. *****
2. As a user, I will complete login / registration by clicking a link sent to my work email address.
3. As a user, I can search for and message other users who have the same email address domain.
4. (LATER) As a company administrator, on a paid plan, I can view statistics about which users are talking to one another (without seeing the actual messages)

Engineering Requirements ******:
Solve for #1 -> Build an app with Expo, along with a backend built with NestJS, that allows a user to enter their work email address.  When the user hits a "submit" button, the app should send a request to the NestJS backend which should then send off an email via SendGrid to the email address.  In the mobile app, the button should be anchored to the bottom of the screen.  When the user clicks into the text input to enter their email address, a keyboard will open (via the system) and the button will need to respond to this by sliding up rather than getting hidden.  At the top, there should be a "title" for your app (text) and below that should be the email input.  Clicking the submit button will trigger a RESTful API call `POST /users/signup` to the NestJS backend.

Once the the App -> Backend -> SendGrid part is working, we'll create a proper email template that contains a link.  When the user clicks this link, it will finish signing the user in via the app.


