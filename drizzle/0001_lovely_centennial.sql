CREATE TABLE `proposals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`jobDescription` text NOT NULL,
	`userSkills` text,
	`generatedProposal` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `proposals_id` PRIMARY KEY(`id`)
);
