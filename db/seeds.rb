# require 'rest-client'
Legislator.destroy_all
Contribution.destroy_all
# def open_secrets_key
#     ENV["API_KEY"]
# end


# def legislator_set
#     states = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'ND', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ]
#     api_data = {key: open_secrets_key}
#     states.each do |state|
#     legislators = RestClient.get("http://www.opensecrets.org/api/?method=getLegislators&id=#{state}&apikey=#{api_data[:key]}")
#     hash = Hash.from_xml(legislators)
#     # puts hash["response"]["legislator"]
#     # puts "#{state} + ***************"
#     # legislator_array = JSON.parse(legislators)
#     hash["response"]["legislator"].each do |l|
#         puts l["firstlast"]
#        current_l = Legislator.create(name: l["firstlast"], party: l["party"], website_url: l["website"])
#         data = RestClient.get("https://www.opensecrets.org/api/?method=candContrib&cid=#{l["cid"]}&cycle=2020&apikey=#{api_data[:key]}")
#         contributions = Hash.from_xml(data)
#         # byebug
#         contributions["response"]["contributors"]["contributor"].each do |cln| 
#             Contribution.create(organization: cln["org_name"], amount: cln["total"].to_i, legislator_id: current_l.id )
#         end

#         end
#     end
# end

legislator = Legislator.create(name: 'Gorp', party: 'republican', website_url: "google.com")

legislator2 = Legislator.create(name: 'Thorp', party: 'democrat', website_url: "yahoo.com")
legislator3 = Legislator.create(name: 'Gumber Brunchworth', party: 'democrat', website_url: "yahoo.com")
legislator4 = Legislator.create(name: 'Borch Horstley', party: 'republican', website_url: "yahoo.com")
legislator5 = Legislator.create(name: 'Orval Faubus', party: 'republican', website_url: "yahoo.com")
legislator6 = Legislator.create(name: 'Burm Snart', party: 'republican', website_url: "yahoo.com")
legislator7 = Legislator.create(name: 'Mungus Horks', party: 'republican', website_url: "yahoo.com")
legislator9 = Legislator.create(name: 'Opus Drumbins', party: 'republican', website_url: "yahoo.com")
legislator10 = Legislator.create(name: 'Hort Wessel', party: 'republican', website_url: "yahoo.com")
legislator11 = Legislator.create(name: 'Eaglefire Collins Jr', party: 'democrat', website_url: "yahoo.com")
legislator12 = Legislator.create(name: 'Hurgbin Sleathers', party: 'democrat', website_url: "yahoo.com")
legislator13 = Legislator.create(name: 'Rhombus Fournier', party: 'democrat', website_url: "yahoo.com")
legislator14 = Legislator.create(name: 'Tex Grebner', party: 'independent', website_url: "yahoo.com")
legislator15 = Legislator.create(name: 'Bilbous Honcho', party: 'independent', website_url: "yahoo.com")
legislator16 = Legislator.create(name: 'Chisper Flunft', party: 'independent', website_url: "yahoo.com")
legislator16 = Legislator.create(name: 'Florgh Pinchmeat', party: 'independent', website_url: "yahoo.com")
legislator16 = Legislator.create(name: 'Alan Cinsavich', party: 'independent', website_url: "yahoo.com")

contribution = Contribution.create(organization: "ASPCA", amount: 1000, legislator_id: 1)
contribution2 = Contribution.create(organization: "Red Cross", amount: 1000, legislator_id: 2)
contribution3 = Contribution.create(organization: "Pork-Based Vape Juice", amount: 10000, legislator_id: 2)

user = User.create(username: "test", password: "password")