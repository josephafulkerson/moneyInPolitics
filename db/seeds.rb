def open_secrets_key
        ENV["API_KEY"]
    end


# def legislator_set
    states = [ 'WI', 'WY' ]
    api_data = {key: open_secrets_key}
    states.each do |state|
    legislators = RestClient.get("http://www.opensecrets.org/api/?method=getLegislators&id=#{state}&apikey=#{api_data[:key]}")
    hash = Hash.from_xml(legislators)

    hash["response"]["legislator"].each do |l|
        puts l["firstlast"]
       current_l = Legislator.create(name: l["firstlast"], party: l["party"], website_url: l["website"])
        data = RestClient.get("https://www.opensecrets.org/api/?method=candContrib&cid=#{l["cid"]}&cycle=2020&apikey=#{api_data[:key]}")
        contributions = Hash.from_xml(data)
        # byebug
        contributions["response"]["contributors"]["contributor"].each do |cln| 
            Contribution.create(organization: cln["org_name"], amount: cln["total"].to_i, legislator_id: current_l.id )
        end

    end
end


# user = User.create(username: "test", password: "password")

# left => 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
# 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA'