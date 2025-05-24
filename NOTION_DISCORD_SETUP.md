# Job Application Integration Setup

This guide will help you set up the Notion database and Discord webhook integration for job applications.

## Discord Webhook Setup

1. Go to your Discord server
2. Navigate to Server Settings → Integrations → Webhooks
3. Click "Create Webhook" or "New Webhook"
4. Choose the channel where you want to receive notifications
5. Copy the webhook URL
6. Add it to your `.env` file as `DISCORD_WEBHOOK_URL`

## Notion Integration Setup

### 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "Create new integration"
3. Give it a name (e.g., "Formula Nano Jobs")
4. Select your workspace
5. Copy the "Internal Integration Token"
6. Add it to your `.env` file as `NOTION_TOKEN`

### 2. Create a Notion Database

1. Create a new page in Notion
2. Add a database with the following properties:

| Property Name        | Property Type | Configuration                                                                                                                  |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Name**             | Title         | (Default title property)                                                                                                       |
| **Email**            | Email         |                                                                                                                                |
| **Position**         | Select        | Options: Synthesis Specialist, STM Hardware Developer, Molecular Modeling Specialist, Outreach Coordinator, Research Assistant |
| **Subteam**          | Select        | Options: Chemistry, Instrumentation, Computation, Business, General                                                            |
| **Student ID**       | Rich text     |                                                                                                                                |
| **Program**          | Rich text     |                                                                                                                                |
| **Phone**            | Phone number  |                                                                                                                                |
| **Application Date** | Date          |                                                                                                                                |
| **Status**           | Select        | Options: New Application, Under Review, Interview Scheduled, Accepted, Rejected                                                |

### 3. Share Database with Integration

1. In your Notion database, click the three dots menu (⋯) in the top right
2. Click "Connect to" and select your integration
3. Copy the database ID from the URL (it's the string between the last `/` and the `?`)
   - Example: `https://notion.so/workspace/DATABASE_ID?v=...`
4. Add the database ID to your `.env` file as `NOTION_DATABASE_ID`

## Environment Variables

Create a `.env` file in your project root with:

```env
# Discord Integration
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url

# Notion Integration
NOTION_TOKEN=secret_your-notion-integration-token
NOTION_DATABASE_ID=your-notion-database-id
```

## Testing

1. Submit a test application through your website
2. Check that:
   - A new entry appears in your Notion database
   - A notification is sent to your Discord channel
   - The applicant is redirected to the success page

## Features

### Notion Database Entry

- All form fields are automatically saved
- Application date is set to current date
- Status is set to "New Application"
- Structured data for easy filtering and sorting

### Discord Notification

- Rich embed with applicant details
- Position and subteam highlighted
- Includes Notion page ID for quick reference
- Formatted for easy reading

### User Experience

- Form validation for required fields
- Success page with next steps
- Professional application flow
