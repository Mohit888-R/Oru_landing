export type TReview = {
	_id: string;
	review: string;
	author: string;
	createdAt: Date;
	rating: number;
	isVerified: boolean;
	displayOrder: number;
	date: string;
};


export type TFaq = {
    id:      string;
    question: string;
    answer:   string;
}