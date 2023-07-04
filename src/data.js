const mockData =
	[
		{
			"department_id": 2220,
			"parent_id": 2219,
			"department_name": "Tax Office",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 2222,
					"parent_id": 2220,
					"department_name": "Personal Property",
					"department_code": "P",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 2223,
			"parent_id": 2219,
			"department_name": "Mobile Home",
			"department_code": "M",
			"department_status_id": "A",
			"children": []
		},
		{
			"department_id": 2224,
			"parent_id": 2219,
			"department_name": "Register of Deeds",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 2225,
					"parent_id": 2224,
					"department_name": "Certified Copies",
					"department_code": "CC",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2226,
					"parent_id": 2224,
					"department_name": "Marriages",
					"department_code": "ML",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2227,
					"parent_id": 2224,
					"department_name": "Recordings",
					"department_code": "RC",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2228,
					"parent_id": 2224,
					"department_name": "Other",
					"department_code": "RO",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 2229,
			"parent_id": 2219,
			"department_name": "Law Enforcement",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 2230,
					"parent_id": 2229,
					"department_name": "Pistal Purchase Permit",
					"department_code": "PP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2231,
					"parent_id": 2229,
					"department_name": "Fingerprints",
					"department_code": "FP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2232,
					"parent_id": 2229,
					"department_name": "Donations",
					"department_code": "DO",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2233,
					"parent_id": 2229,
					"department_name": "Beer/Wine Permits",
					"department_code": "BW",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2234,
					"parent_id": 2229,
					"department_name": "Concealed Carry Permit",
					"department_code": "CP",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2235,
					"parent_id": 2229,
					"department_name": "Service Fees",
					"department_code": "SF",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 2236,
			"parent_id": 2219,
			"department_name": "Recreation",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 2237,
					"parent_id": 2236,
					"department_name": "Youth Sports Registration",
					"department_code": "YR",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2238,
					"parent_id": 2236,
					"department_name": "Youth Sports Sponsorship",
					"department_code": "YS",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2239,
					"parent_id": 2236,
					"department_name": "Disc Golf Course",
					"department_code": "DG",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2240,
					"parent_id": 2236,
					"department_name": "Veterans Memorial Park Rental",
					"department_code": "VR",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2241,
					"parent_id": 2236,
					"department_name": "Camping",
					"department_code": "CG",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2242,
					"parent_id": 2236,
					"department_name": "Fairgrounds Facility Rental",
					"department_code": "FR",
					"department_status_id": "A",
					"children": []
				}
			]
		},
		{
			"department_id": 2243,
			"parent_id": 2219,
			"department_name": "Other Fees",
			"department_code": null,
			"department_status_id": "A",
			"children": [
				{
					"department_id": 2244,
					"parent_id": 2243,
					"department_name": "Transportation Fees",
					"department_code": "TF",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2245,
					"parent_id": 2243,
					"department_name": "EMS Fees",
					"department_code": "EF",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2246,
					"parent_id": 2243,
					"department_name": "Solid Waste Fees",
					"department_code": "SW",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2247,
					"parent_id": 2243,
					"department_name": "Building Inspector Fees",
					"department_code": "BI",
					"department_status_id": "A",
					"children": []
				}, {
					"department_id": 2248,
					"parent_id": 2243,
					"department_name": "Other Misc Fees",
					"department_code": null,
					"department_status_id": "A",
					"children": [
						{
							"department_id": 2250,
							"parent_id": 2248,
							"department_name": "Sub Other Misc Fees",
							"department_code": "SOF",
							"department_status_id": "A",
							"children": []
						},
						{
							"department_id": 2251,
							"parent_id": 2248,
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