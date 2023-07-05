const mockData =
	[
		{
			"department_id": 2,
			"parent_id": 1,
			"department_name": "Tax Office",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 3,
					"parent_id": 2,
					"department_name": "Personal Property",
					"department_code": "P",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 4,
			"parent_id": 1,
			"department_name": "Mobile Home",
			"department_code": "M",
			"department_status_id": "A",
			"children": []
		},
		{
			"department_id": 5,
			"parent_id": 1,
			"department_name": "Register of Deeds",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 6,
					"parent_id": 5,
					"department_name": "Certified Copies",
					"department_code": "CC",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 7,
					"parent_id": 5,
					"department_name": "Marriages",
					"department_code": "ML",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 8,
					"parent_id": 5,
					"department_name": "Recordings",
					"department_code": "RC",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 9,
					"parent_id": 5,
					"department_name": "Other",
					"department_code": "RO",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 10,
			"parent_id": 1,
			"department_name": "Law Enforcement",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 11,
					"parent_id": 10,
					"department_name": "Pistal Purchase Permit",
					"department_code": "PP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 12,
					"parent_id": 10,
					"department_name": "Fingerprints",
					"department_code": "FP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 13,
					"parent_id": 10,
					"department_name": "Donations",
					"department_code": "DO",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 14,
					"parent_id": 10,
					"department_name": "Beer/Wine Permits",
					"department_code": "BW",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 15,
					"parent_id": 10,
					"department_name": "Concealed Carry Permit",
					"department_code": "CP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 16,
					"parent_id": 10,
					"department_name": "Service Fees",
					"department_code": "SF",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 17,
			"parent_id": 1,
			"department_name": "Recreation",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 18,
					"parent_id": 17,
					"department_name": "Youth Sports Registration",
					"department_code": "YR",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 19,
					"parent_id": 17,
					"department_name": "Youth Sports Sponsorship",
					"department_code": "YS",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 20,
					"parent_id": 17,
					"department_name": "Disc Golf Course",
					"department_code": "DG",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 21,
					"parent_id": 17,
					"department_name": "Veterans Memorial Park Rental",
					"department_code": "VR",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 22,
					"parent_id": 17,
					"department_name": "Camping",
					"department_code": "CG",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 23,
					"parent_id": 17,
					"department_name": "Fairgrounds Facility Rental",
					"department_code": "FR",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 24,
			"parent_id": 1,
			"department_name": "Other Fees",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 25,
					"parent_id": 24,
					"department_name": "Transportation Fees",
					"department_code": "TF",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 26,
					"parent_id": 24,
					"department_name": "EMS Fees",
					"department_code": "EF",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 27,
					"parent_id": 24,
					"department_name": "Solid Waste Fees",
					"department_code": "SW",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 28,
					"parent_id": 24,
					"department_name": "Building Inspector Fees",
					"department_code": "BI",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 29,
					"parent_id": 24,
					"department_name": "Other Misc Fees",
					"department_code": null,
					"department_status_id": "A",
					"children": [
						{
							"department_id": 30,
							"parent_id": 29,
							"department_name": "Sub Other Misc Fees",
							"department_code": "SOF",
							"department_status_id": "A",
							"children": []
						},
						{
							"department_id": 31,
							"parent_id": 29,
							"department_name": "Sub Other Misc Fees 2",
							"department_code": "SF2",
							"department_status_id": "A",
							"children": []
						}
					]
				}
			]
		}
	]
export default mockData